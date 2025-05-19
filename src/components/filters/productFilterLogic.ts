
export const filterLogic = ():void => {

const filterHeaders = document.querySelectorAll<HTMLDivElement>('.filter-header');

filterHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const filterGroup = header.parentElement as HTMLElement | null;

    if (!filterGroup) return;

    const filterContent = filterGroup.querySelector<HTMLElement>('.filter-content');
    const arrow = header.querySelector<HTMLElement>('.arrow');

    if (filterContent) {
      filterContent.classList.toggle('active');
    }

    if (arrow) {
      arrow.classList.toggle('active');
    }
  });
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


}
