import { getProducts } from "@/api/products";

export const filterLogic = async () => {

  const filterHeaders = document.querySelectorAll<HTMLDivElement>('.filter-header');
  const applyBtn = document.getElementById('apply-btn');
  const sortSelect = document.getElementById('sort-select') as HTMLSelectElement | null;

  filterHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const filterGroup = header.parentElement as HTMLElement | null;
      if (!filterGroup) return;

      const filterContent = filterGroup.querySelector<HTMLElement>('.filter-content');
      const arrow = header.querySelector<HTMLElement>('.arrow');

      filterContent?.classList.toggle('active');
      arrow?.classList.toggle('active');
    });
  });

  applyBtn?.addEventListener('click', async () => {
    const sortBy = sortSelect?.value || undefined;
    getProducts({ sortBy: sortBy });

  });
  const activateFilterByIndex = (index: number) => {
    const filterGroups = document.querySelectorAll<HTMLElement>('.filter-group');
    const group = filterGroups[index];
    if (!group) return;

    const content = group.querySelector<HTMLElement>('.filter-content');
    const arrow = group.querySelector<HTMLElement>('.arrow');

    content?.classList.add('active');
    arrow?.classList.add('active');
  };

  activateFilterByIndex(2);
  activateFilterByIndex(3);
};
