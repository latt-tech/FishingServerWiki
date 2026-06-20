import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>
          <DocsLayout 
            tree={source.getPageTree()} 
            {...baseOptions()}
            i18n={{
              toc: '本页目录',
              search: '搜索',
              searchNoResult: '没找到结果喵...',
              tocNoHeadings: '本页没有标题'
            }}
          >
            {children}
          </DocsLayout>
        </Provider>
      </body>
    </html>
  );
}