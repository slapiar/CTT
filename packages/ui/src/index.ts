export function actionButton(label: string, action: () => void): HTMLButtonElement {
  const button = document.createElement('button');
  button.type = 'button'; button.textContent = label;
  button.addEventListener('click', action);
  return button;
}
