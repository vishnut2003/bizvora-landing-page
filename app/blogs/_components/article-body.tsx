/**
 * The post body. The HTML is our own CMS's Gutenberg output, already passed
 * through rewriteInternalLinks + sanitiseHtml in lib/wp.ts; the .wp-prose
 * styles live in app/globals.css.
 */
export function ArticleBody({ html }: { html: string }) {
  return <div className="wp-prose" dangerouslySetInnerHTML={{ __html: html }} />;
}
