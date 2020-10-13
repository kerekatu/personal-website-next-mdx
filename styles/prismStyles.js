import { css } from '@emotion/core'

export const prismStyle = css`
  pre[class*='language-'],
  code[class*='language-'] {
    color: var(--color-primary);
    font-size: var(--baseFontSize);
    text-shadow: none;
    font-family: 'Ubuntu Mono', monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*='language-']::selection,
  code[class*='language-']::selection,
  pre[class*='language-']::mozselection,
  code[class*='language-']::mozselection {
    text-shadow: none;
    background: var(--color-primary);
  }

  @media print {
    pre[class*='language-'],
    code[class*='language-'] {
      text-shadow: none;
    }
  }

  pre[class*='language-'] {
    padding: 2rem;
    margin: 0.5em 0;
    overflow: auto;
    background: var(--color-white-2);
    border-radius: var(--cardRadius);
    border: 0.2rem solid var(--color-white-3);
  }

  :not(pre) > code[class*='language-'] {
    padding: 0.1em 0.3em;
    border-radius: 0.3em;
    color: var(--color-primary);
    background: var(--color-white-2);
  }

  .namespace {
    opacity: 0.7;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: var(--color-gray);
  }

  .token.punctuation {
    color: var(--color-gray);
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: var(--color-orange);
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: var(--color-primary);
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: var(--color-orange);
    background: var(--color-white-2);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: var(--color-black);
  }

  .token.function {
    color: var(--color-orange);
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: var(--color-orange);
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  pre[data-line] {
    position: relative;
  }

  pre[class*='language-'] > code[class*='language-'] {
    position: relative;
    z-index: 1;
  }

  .line-highlight {
    position: absolute;
    left: 0;
    right: 0;
    padding: inherit 0;
    margin-top: 1em;
    background: var(--color-white-4);
    box-shadow: inset 5px 0 0 var(--color-primary);
    z-index: 0;
    pointer-events: none;
    line-height: inherit;
    white-space: pre;
  }
`
