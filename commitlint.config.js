module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[([A-Z]+)\]\s+(.+)$/,
      headerCorrespondence: ["type", "subject"],
    },
  },
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "FEAT", // 새로운 기능
        "FIX", // 버그 수정
        "DOCS", // 문서 변경
        "STYLE", // 코드 포맷팅
        "REFACTOR", // 코드 리팩토링
        "TEST", // 테스트 코드
        "CHORE", // 빌드 프로세스나 도구 변경
      ],
    ],
    "type-case": [2, "always", "upper-case"],
  },
};
