export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header 
          style={{
            backgroundColor: 'lightblue',
            padding: '1rem',
            textAlign: 'center',
          }}
        >
          <p>Header</p>
        </header>
        {children}
          <footer
            style={{
              backgroundColor: 'lightblue',
              padding: '1rem',
              textAlign: 'center',
            }}
          >
            <p>Footer</p>
          </footer>
        </body>
    </html>
  )
}
