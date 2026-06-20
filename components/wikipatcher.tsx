'use client';

import { useEffect } from 'react';

export default function WikiPatcher() {
  useEffect(() => {
    const translate = () => {
      document.querySelectorAll('*').forEach((el) => {
        if (el.children.length === 0 && el.textContent) {
          const text = el.textContent.trim();
          if (text === 'On this page') el.textContent = '本页目录';
          if (text === 'Search') el.textContent = '搜索文档';
          if (text === 'Next') el.textContent = '下一页';
          if (text === 'Previous') el.textContent = '上一页';
          if (text === 'No results found') el.textContent = '没有找到相关结果喵...';
          if (text === 'No headings') el.textContent = '本页没有标题';
        }
      });
    };

    translate();

    const observer = new MutationObserver(translate);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}