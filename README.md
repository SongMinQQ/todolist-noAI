# 할것들

- todolist구현
- 일반모드&다크모드 지원
- 확장성 고려하기

## 다크모드 구현하기

css 라이브러리를 선택하여야 한다. tailwind로 단순하게 구현한다면 모든 태그마다 dark:bg-white 이런식으로 다크 모드일 경우의 속성을 전부 써줘야 한다.

이는 나중에 유지보수가 힘들어질 가능성이 있다.

때문에 CSS-in-JS 라이브러리 중 하나를 선택한다.

- styled component : deprecated되었으므로 제외
- emotion : styled component보다 가볍고 유연함

emotion으로 결정