import App from '../src/App.svelte';
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/svelte";

test('should have Svelte keyword inside', () => {
    const { container } = render(App);
    const contnr = container.querySelector('.is-primary');
    expect(contnr.firstChild).toHaveTextContent('Svelte')
});
