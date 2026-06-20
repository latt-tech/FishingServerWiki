import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { I18nProvider } from 'fumadocs-ui/i18n';

const inter = Inter({
  subsets: ['latin'],
});

const SafeI18nProvider = I18nProvider as any;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <SafeI18nProvider
          locale="zh-CN"
          translations={{
            search: '搜索文档...',
            searchNoResult: '没有找到结果喵...',
            toc: '本页目录',
            tocNoHeadings: '本页没有标题',
            next: '下一页',
            previous: '上一页',
          }}
        >
          <Provider>
            <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
              {children}
            </DocsLayout>
          </Provider>
        </SafeI18nProvider>
      </body>
    </html>
  );
}