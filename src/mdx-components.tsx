import { Box, Container, Stack, Typography as T } from '@mui/material';
import type { MDXComponents } from 'mdx/types';
import DarkModeFix from './components/muiWrappers/darkModeFix/_darkModeFix';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    h1: ({ children }) => <T variant='h1' gutterBottom>{children}</T>,
    h2: ({ children }) => <T variant='h2' gutterBottom>{children}</T>,
    h3: ({ children }) => <T variant='h3' gutterBottom>{children}</T>,
    h4: ({ children }) => <T variant='h4' gutterBottom>{children}</T>,
    h5: ({ children }) => <T variant='h5' gutterBottom>{children}</T>,
    h6: ({ children }) => <T variant='h6' gutterBottom>{children}</T>,
    p: ({ children }) => <T variant='body1' gutterBottom>{children}</T>,
    wrapper: ({ children }) => (
      <>
        <DarkModeFix>
          <Container maxWidth="md">
            {children}
          </Container>
        </DarkModeFix>
      </>
    ),
  }
}