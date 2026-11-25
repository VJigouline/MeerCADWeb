import { TestBed } from '@angular/core/testing';
import { Home } from './home';

describe('Home', () => {
  let page: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Home] }).compileComponents();
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    page = fixture.nativeElement as HTMLElement;
  });

  it('leads with SceneEditor and links to the live app', () => {
    expect(page.querySelector('h1')?.textContent).toBe('SceneEditor');
    const open = page.querySelector<HTMLAnchorElement>('.button.primary');
    expect(open?.textContent).toContain('Open SceneEditor');
    expect(open?.getAttribute('href')).toBe('https://vjigouline.github.io/SceneEditor/');
  });

  it('shows a card for every library, with documentation and GitHub links', () => {
    const names = [
      'mc-step-import',
      'mc-ifc-import',
      'mc-dxf-import',
      'mc-blender-import',
      'mc-ogre-import',
      'mc-raytracer',
      'mc-curves',
      'mc-surfaces',
      'mc-solids',
    ];
    const cards = Array.from(page.querySelectorAll('app-project-card'));
    expect(cards.map((card) => card.querySelector('h3')?.textContent?.trim())).toEqual(names);

    for (const [i, card] of cards.entries()) {
      const hrefs = Array.from(card.querySelectorAll('a')).map((a) => a.getAttribute('href'));
      const repo = `https://github.com/VJigouline/${names[i]}`;
      expect(hrefs).toContain(repo);
      expect(hrefs).toContain(`${repo}/tree/main/Documentation`);
      expect(hrefs).toContain(`${repo}/blob/main/Documentation/GettingStarted.md`);
    }
  });
});
