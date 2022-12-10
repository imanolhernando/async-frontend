import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
    await render('AppComponent', {
      declarations: [AppComponent],
    });
    expect(render).toBeTruthy();
  });

  // it('should be accessible', async () => {
  //   const { container } = await render(AppComponent, {
  //     declarations: [AppComponent],
  //   });

  //   expect(await axe(container)).toBe(toHaveNoViolations);
  // });
});
