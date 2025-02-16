import { render as rtlRender } from '@testing-library/react'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Providers } from '@/app/providers'

function render(ui: React.ReactElement, options = {}) {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider>
        <Providers>
        {typeof window !== "undefined" ? children : <div>{children}</div>}
        </Providers>
      </ThemeProvider>
    ),
    ...options,
  })
}

export * from '@testing-library/react'
export { render } 