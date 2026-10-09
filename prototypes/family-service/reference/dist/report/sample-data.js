// 仅用于展示，综合分、等级和百分位均为预设示例。正式环境沿用现有数据接口和算法。
export const samples = {
  "mixed": {
    "label": "当前示例",
    "totalScore": 78,
    "totalGrade": "良好",
    "totalTone": "good",
    "scores": {
      "processing-speed": 88,
      "working-memory": 68,
      "executive-function": 76,
      "visual-discrimination": 80,
      "visual-search": 78
    },
    "percentiles": {
      "processing-speed": 93,
      "working-memory": 45,
      "executive-function": 64,
      "visual-discrimination": 74,
      "visual-search": 69
    }
  },
  "steady": {
    "label": "全中不同分",
    "totalScore": 71,
    "totalGrade": "良好",
    "totalTone": "good",
    "scores": {
      "processing-speed": 70,
      "working-memory": 68,
      "executive-function": 74,
      "visual-discrimination": 72,
      "visual-search": 71
    },
    "percentiles": {
      "processing-speed": 50,
      "working-memory": 45,
      "executive-function": 60,
      "visual-discrimination": 55,
      "visual-search": 52
    }
  },
  "equalMedium": {
    "label": "全中同分",
    "totalScore": 70,
    "totalGrade": "良好",
    "totalTone": "good",
    "scores": {
      "processing-speed": 70,
      "working-memory": 70,
      "executive-function": 70,
      "visual-discrimination": 70,
      "visual-search": 70
    },
    "percentiles": {
      "processing-speed": 50,
      "working-memory": 50,
      "executive-function": 50,
      "visual-discrimination": 50,
      "visual-search": 50
    }
  },
  "high": {
    "label": "五项全高",
    "totalScore": 88,
    "totalGrade": "优秀",
    "totalTone": "excellent",
    "scores": {
      "processing-speed": 85,
      "working-memory": 88,
      "executive-function": 92,
      "visual-discrimination": 90,
      "visual-search": 86
    },
    "percentiles": {
      "processing-speed": 86,
      "working-memory": 93,
      "executive-function": 99,
      "visual-discrimination": 98,
      "visual-search": 88
    }
  },
  "highLow": {
    "label": "高＋低",
    "totalScore": 66,
    "totalGrade": "良好",
    "totalTone": "good",
    "scores": {
      "processing-speed": 90,
      "working-memory": 45,
      "executive-function": 55,
      "visual-discrimination": 88,
      "visual-search": 50
    },
    "percentiles": {
      "processing-speed": 98,
      "working-memory": 1,
      "executive-function": 14,
      "visual-discrimination": 93,
      "visual-search": 2
    }
  },
  "allBands": {
    "label": "高＋中＋低",
    "totalScore": 68,
    "totalGrade": "良好",
    "totalTone": "good",
    "scores": {
      "processing-speed": 90,
      "working-memory": 45,
      "executive-function": 72,
      "visual-discrimination": 80,
      "visual-search": 55
    },
    "percentiles": {
      "processing-speed": 98,
      "working-memory": 1,
      "executive-function": 55,
      "visual-discrimination": 74,
      "visual-search": 14
    }
  },
  "low": {
    "label": "中＋低",
    "totalScore": 56,
    "totalGrade": "重点关注",
    "totalTone": "focus",
    "scores": {
      "processing-speed": 52,
      "working-memory": 46,
      "executive-function": 57,
      "visual-discrimination": 65,
      "visual-search": 62
    },
    "percentiles": {
      "processing-speed": 7,
      "working-memory": 1,
      "executive-function": 19,
      "visual-discrimination": 38,
      "visual-search": 31
    }
  },
  "allLow": {
    "label": "全低不同分",
    "totalScore": 52,
    "totalGrade": "重点关注",
    "totalTone": "focus",
    "scores": {
      "processing-speed": 52,
      "working-memory": 46,
      "executive-function": 57,
      "visual-discrimination": 55,
      "visual-search": 50
    },
    "percentiles": {
      "processing-speed": 7,
      "working-memory": 1,
      "executive-function": 19,
      "visual-discrimination": 14,
      "visual-search": 2
    }
  },
  "equalLow": {
    "label": "全低同分",
    "totalScore": 50,
    "totalGrade": "重点关注",
    "totalTone": "focus",
    "scores": {
      "processing-speed": 50,
      "working-memory": 50,
      "executive-function": 50,
      "visual-discrimination": 50,
      "visual-search": 50
    },
    "percentiles": {
      "processing-speed": 2,
      "working-memory": 2,
      "executive-function": 2,
      "visual-discrimination": 2,
      "visual-search": 2
    }
  },
  "ties": {
    "label": "并列最高与最低",
    "totalScore": 77,
    "totalGrade": "良好",
    "totalTone": "good",
    "scores": {
      "processing-speed": 90,
      "working-memory": 65,
      "executive-function": 65,
      "visual-discrimination": 90,
      "visual-search": 76
    },
    "percentiles": {
      "processing-speed": 98,
      "working-memory": 38,
      "executive-function": 38,
      "visual-discrimination": 98,
      "visual-search": 64
    }
  },
  "partial": {
    "label": "部分缺失",
    "totalScore": 70,
    "totalGrade": "良好",
    "totalTone": "good",
    "scores": {
      "processing-speed": 73,
      "working-memory": 58,
      "executive-function": null,
      "visual-discrimination": null,
      "visual-search": 78
    },
    "percentiles": {
      "processing-speed": 57,
      "working-memory": 21,
      "executive-function": null,
      "visual-discrimination": null,
      "visual-search": 69
    }
  },
  "empty": {
    "label": "全部缺失",
    "totalScore": null,
    "totalGrade": "待完成",
    "totalTone": "pending",
    "scores": {
      "processing-speed": null,
      "working-memory": null,
      "executive-function": null,
      "visual-discrimination": null,
      "visual-search": null
    },
    "percentiles": {
      "processing-speed": null,
      "working-memory": null,
      "executive-function": null,
      "visual-discrimination": null,
      "visual-search": null
    }
  }
};
