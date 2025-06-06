# Задание: Проверка заголовка страницы с помощью Playwright

## Условие:
- Открыть сайт https://playwright.dev/
- Проверить, что заголовок страницы соответствует ожидаемому
- Запустить тест минимум в двух браузерах

## Выполнено:
- Использован Playwright
- Заголовок проверяется через `expect(page).toHaveTitle(...)`
- Конфигурация в `playwright.config.js` запускает тесты в Chromium и WebKit

## Команды запуска:
```bash
npm install
npx playwright test
