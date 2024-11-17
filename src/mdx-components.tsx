import type { MDXComponents } from 'mdx/types';

export function code({children, styles}: {children: any, styles: any}) {
  return <>CODE</>
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}