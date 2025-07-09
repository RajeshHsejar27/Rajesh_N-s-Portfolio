import { sanitizeHtml, formatDate, generateSlug } from '@/lib/utils';

describe('Utils', () => {
  describe('sanitizeHtml', () => {
    it('sanitizes HTML characters', () => {
      const input = '<script>alert("xss")</script>';
      const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;';
      expect(sanitizeHtml(input)).toBe(expected);
    });

    it('handles empty string', () => {
      expect(sanitizeHtml('')).toBe('');
    });

    it('handles normal text', () => {
      const input = 'Hello World';
      expect(sanitizeHtml(input)).toBe(input);
    });
  });

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2024-01-15');
      const formatted = formatDate(date);
      expect(formatted).toMatch(/January 15, 2024/);
    });
  });

  describe('generateSlug', () => {
    it('generates slug from text', () => {
      expect(generateSlug('Hello World')).toBe('hello-world');
      expect(generateSlug('This is a Test!')).toBe('this-is-a-test');
      expect(generateSlug('  Multiple   Spaces  ')).toBe('multiple-spaces');
    });
  });
});