import React from 'react';

type AlignType = 'left' | 'center' | 'right';

type MarkdownBlock =
  | { type: 'heading'; level: number; text: string }
  | { type: 'table'; headers: string[]; alignments: AlignType[]; rows: string[][] }
  | { type: 'unordered_list'; items: string[] }
  | { type: 'ordered_list'; items: string[] }
  | { type: 'code_block'; lang: string; code: string }
  | { type: 'blockquote'; text: string }
  | { type: 'hr' }
  | { type: 'paragraph'; text: string };

function parseTableRow(line: string): string[] {
  let cleaned = line.trim();
  if (cleaned.startsWith('|')) cleaned = cleaned.slice(1);
  if (cleaned.endsWith('|')) cleaned = cleaned.slice(0, -1);
  return cleaned.split('|').map((cell) => cell.trim());
}

function isTableDelimiter(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed.includes('|') && !trimmed.includes('-')) return false;
  const cells = parseTableRow(line);
  if (cells.length === 0) return false;
  return cells.every((c) => /^:?-{2,}:?$/.test(c.trim()));
}

function parseMarkdownBlocks(text: string): MarkdownBlock[] {
  const lines = text.split('\n');
  const blocks: MarkdownBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // 1. Code block
    if (trimmed.startsWith('```')) {
      const lang = trimmed.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++;
      blocks.push({
        type: 'code_block',
        lang,
        code: codeLines.join('\n'),
      });
      continue;
    }

    // 2. Horizontal rule
    if (/^(\*{3,}|-{3,}|_{3,})$/.test(trimmed)) {
      blocks.push({ type: 'hr' });
      i++;
      continue;
    }

    // 3. Blockquote
    if (trimmed.startsWith('>')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s*/, ''));
        i++;
      }
      blocks.push({
        type: 'blockquote',
        text: quoteLines.join('\n'),
      });
      continue;
    }

    // 4. Headings (# to ######)
    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      blocks.push({
        type: 'heading',
        level: headingMatch[1].length,
        text: headingMatch[2].trim(),
      });
      i++;
      continue;
    }

    // 5. Table (current line has pipe and next line is delimiter)
    if (line.includes('|') && i + 1 < lines.length && isTableDelimiter(lines[i + 1])) {
      const headerCells = parseTableRow(line);
      const delimiterCells = parseTableRow(lines[i + 1]);
      const alignments: AlignType[] = delimiterCells.map((c) => {
        const t = c.trim();
        if (t.startsWith(':') && t.endsWith(':')) return 'center';
        if (t.endsWith(':')) return 'right';
        return 'left';
      });

      i += 2;
      const rows: string[][] = [];
      while (
        i < lines.length &&
        lines[i].trim().includes('|') &&
        !lines[i].trim().startsWith('```')
      ) {
        rows.push(parseTableRow(lines[i]));
        i++;
      }

      blocks.push({
        type: 'table',
        headers: headerCells,
        alignments,
        rows,
      });
      continue;
    }

    // 6. Unordered list (- , * , + , • )
    if (/^[-*+•]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*+•]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*+•]\s+/, ''));
        i++;
      }
      blocks.push({
        type: 'unordered_list',
        items,
      });
      continue;
    }

    // 7. Ordered list (1. , 2) , etc.)
    if (/^\d+[.)]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+[.)]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+[.)]\s+/, ''));
        i++;
      }
      blocks.push({
        type: 'ordered_list',
        items,
      });
      continue;
    }

    // 8. Paragraph
    const paraLines: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith('```') &&
      !lines[i].trim().match(/^#{1,6}\s+/) &&
      !/^(\*{3,}|-{3,}|_{3,})$/.test(lines[i].trim()) &&
      !lines[i].trim().startsWith('>') &&
      !/^[-*+•]\s+/.test(lines[i].trim()) &&
      !/^\d+[.)]\s+/.test(lines[i].trim()) &&
      !(lines[i].includes('|') && i + 1 < lines.length && isTableDelimiter(lines[i + 1]))
    ) {
      paraLines.push(lines[i]);
      i++;
    }

    blocks.push({
      type: 'paragraph',
      text: paraLines.join('\n'),
    });
  }

  return blocks;
}

function renderInline(text: string): React.ReactNode {
  const elements: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  const regex =
    /(\[([^\]]+)\]\((https?:\/\/[^\s)]+|[^\s)]+)\))|(\*\*\*([\s\S]+?)\*\*\*)|(\*\*([\s\S]+?)\*\*|__([\s\S]+?)__)|((?<!\*)\*([^\s*][\s\S]*?[^\s*]|[^\s*])\*(?!\*)|(?<!_)_([^\s_][\s\S]*?[^\s_]|[^\s_])_(?!_))|(`([^`]+)`)|(\n)/;

  while (remaining.length > 0) {
    const match = remaining.match(regex);
    if (!match) {
      elements.push(<React.Fragment key={key++}>{remaining}</React.Fragment>);
      break;
    }

    if (match.index !== undefined && match.index > 0) {
      elements.push(
        <React.Fragment key={key++}>
          {remaining.slice(0, match.index)}
        </React.Fragment>
      );
    }

    if (match[1]) {
      // Link [text](url)
      elements.push(
        <a
          key={key++}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="ai-markdown-link"
        >
          {match[2]}
        </a>
      );
    } else if (match[4]) {
      // Bold + Italic ***text***
      elements.push(
        <strong key={key++} className="ai-markdown-strong">
          <em className="ai-markdown-em">{renderInline(match[5])}</em>
        </strong>
      );
    } else if (match[6]) {
      // Bold **text**
      elements.push(
        <strong key={key++} className="ai-markdown-strong">
          {renderInline(match[7] || match[8])}
        </strong>
      );
    } else if (match[9]) {
      // Italic *text*
      elements.push(
        <em key={key++} className="ai-markdown-em">
          {renderInline(match[10] || match[11])}
        </em>
      );
    } else if (match[12]) {
      // Inline code `code`
      elements.push(
        <code key={key++} className="ai-markdown-inline-code">
          {match[13]}
        </code>
      );
    } else if (match[14]) {
      // Line break
      elements.push(<br key={key++} />);
    }

    const matchLen = match[0].length;
    const matchStart = match.index ?? 0;
    remaining = remaining.slice(matchStart + matchLen);
  }

  return elements;
}

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const blocks = parseMarkdownBlocks(content);

  return (
    <div className="ai-markdown-body">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'heading': {
            const HeadingTag = `h${Math.min(block.level, 6)}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
            return (
              <HeadingTag key={idx} className={`ai-markdown-h${block.level}`}>
                {renderInline(block.text)}
              </HeadingTag>
            );
          }
          case 'table': {
            return (
              <div key={idx} className="ai-table-container">
                <table className="ai-markdown-table">
                  <thead>
                    <tr>
                      {block.headers.map((h, hIdx) => (
                        <th
                          key={hIdx}
                          style={{ textAlign: block.alignments[hIdx] || 'left' }}
                        >
                          {renderInline(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            style={{ textAlign: block.alignments[cIdx] || 'left' }}
                          >
                            {renderInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          case 'unordered_list': {
            return (
              <ul key={idx} className="ai-markdown-ul">
                {block.items.map((item, iIdx) => (
                  <li key={iIdx}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          }
          case 'ordered_list': {
            return (
              <ol key={idx} className="ai-markdown-ol">
                {block.items.map((item, iIdx) => (
                  <li key={iIdx}>{renderInline(item)}</li>
                ))}
              </ol>
            );
          }
          case 'code_block': {
            return (
              <div key={idx} className="ai-markdown-code-block">
                <pre>
                  <code>{block.code}</code>
                </pre>
              </div>
            );
          }
          case 'blockquote': {
            return (
              <blockquote key={idx} className="ai-markdown-blockquote">
                {renderInline(block.text)}
              </blockquote>
            );
          }
          case 'hr': {
            return <hr key={idx} className="ai-markdown-hr" />;
          }
          case 'paragraph':
          default: {
            return (
              <p key={idx} className="ai-markdown-p">
                {renderInline(block.text)}
              </p>
            );
          }
        }
      })}
    </div>
  );
};
