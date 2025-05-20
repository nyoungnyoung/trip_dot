module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[([A-Z][a-z]*?)\]\s+(.+)$/,
      headerCorrespondence: ["type", "subject"],
    },
  },
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "Feat", // 새로운 기능
        "Fix", // 버그 수정
        "Docs", // 문서 변경
        "Style", // 코드 포맷팅
        "Refactor", // 코드 리팩토링
        "Test", // 테스트 코드
        "Chore", // 빌드 프로세스나 도구 변경
      ],
    ],
    "type-case": [2, "always", "pascal-case"],
  },
};
