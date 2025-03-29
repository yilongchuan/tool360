export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  imageUrl: string;
}

export const tools: Tool[] = [
  {
    id: 'md5-decrypt',
    name: 'MD5 Decrypt',
    description: 'Powerful hash cracking service supporting multiple algorithms including MD5, SHA1, and more.',
    url: 'https://crackstation.net/',
    imageUrl: '/md5-decrypt.png'
  },
  {
    id: 'json-formatter',
    name: 'JSON Formatter & Validator',
    description: 'Smart JSON formatting tool with syntax validation and compression features.',
    url: 'https://jsonformatter.curiousconcept.com/',
    imageUrl: '/json-formatter.png'
  },
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    description: 'Real-time regular expression testing tool supporting multiple programming language syntaxes.',
    url: 'https://regex101.com/',
    imageUrl: '/regex-tester.png'
  },
  {
    id: 'sql-fiddle',
    name: 'SQL Fiddle',
    description: 'Test SQL queries instantly without database installation.',
    url: 'https://sqlfiddle.com/',
    imageUrl: '/sql-fiddle.png'
  },
  {
    id: 'api-tester',
    name: 'API Test Tool',
    description: 'Visual HTTP request builder supporting REST and GraphQL APIs.',
    url: 'https://reqbin.com/',
    imageUrl: '/api-tester.png'
  },
  {
    id: 'diff-checker',
    name: 'Code Diff Checker',
    description: 'Highlight differences between text and code with visual comparison.',
    url: 'https://www.diffchecker.com/',
    imageUrl: '/diff-checker.png'
  },
  {
    id: 'base64',
    name: 'Base64 Encoder/Decoder',
    description: 'Convert text, images and files to and from Base64 format.',
    url: 'https://www.base64decode.org/',
    imageUrl: '/base64.png'
  },
  {
    id: 'js-fiddle',
    name: 'JS Fiddle',
    description: 'Live HTML/CSS/JavaScript code playground for front-end development.',
    url: 'https://jsfiddle.net/',
    imageUrl: '/js-fiddle.png'
  },
  {
    id: 'timestamp',
    name: 'Timestamp Converter',
    description: 'Convert between Unix timestamps and human-readable dates with timezone support.',
    url: 'https://www.epochconverter.com/',
    imageUrl: '/timestamp.png'
  },
  {
    id: 'webhook',
    name: 'Webhook Tester',
    description: 'Debug webhook requests with temporary URLs for request inspection.',
    url: 'https://webhook.site/',
    imageUrl: '/webhook.png'
  }
]; 