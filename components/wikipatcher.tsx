'use client';

import { useEffect } from 'react';

export default function WikiPatcher() {
  useEffect(() => {
    const translate = () => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        const text = node.nodeValue?.trim();
        if (!text) continue;

        if (text === 'On this page') node.nodeValue = '本页目录';
        else if (text === 'Search') node.nodeValue = '搜索文档';
        else if (text === 'Next') node.nodeValue = '下一页';
        else if (text === 'Previous') node.nodeValue = '上一页';
        else if (text === 'No results found') node.nodeValue = '没有找到相关结果喵...';
        else if (text === 'No headings') node.nodeValue = '本页没有标题';
      }

      document.querySelectorAll('input').forEach((input) => {
        if (input.placeholder === 'Search' || input.placeholder === 'Search...') {
          input.placeholder = '搜索文档...';
        }
      });
    };

    translate();

    const observer = new MutationObserver(translate);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      characterData: true 
    });

    return () => observer.disconnect();
  }, []);

  return null;
}