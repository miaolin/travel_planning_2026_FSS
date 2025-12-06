import { BudgetItem } from "./types";

export const budgetItems: BudgetItem[] = [
  // Paris
  {
    category: "住宿",
    description: "CDG 机场酒店（1晚）",
    amount: 500,
    currency: "SGD",
    segment: "paris",
    days: [1]
  },
  {
    category: "住宿",
    description: "Marquis Faubourg Saint Honoré（3晚）",
    amount: 1800,
    currency: "EUR",
    segment: "paris",
    days: [2, 3, 4]
  },
  {
    category: "门票",
    description: "Roland Garros 法网门票 Day 1（4人，Chatrier/Lenglen）",
    amount: 600,
    currency: "EUR",
    segment: "paris",
    days: [2]
  },
  {
    category: "门票",
    description: "Roland Garros 法网门票 Day 2（4人，外场/夜场）",
    amount: 400,
    currency: "EUR",
    segment: "paris",
    days: [3]
  },
  {
    category: "交通",
    description: "塞纳河游船票（4人）",
    amount: 60,
    currency: "EUR",
    segment: "paris",
    days: [2]
  },
  {
    category: "餐饮",
    description: "巴黎餐饮估算（4天，每天约150欧）",
    amount: 600,
    currency: "EUR",
    segment: "paris",
    days: [1, 2, 3, 4]
  },
  {
    category: "交通",
    description: "巴黎市内交通（地铁/出租车）",
    amount: 150,
    currency: "EUR",
    segment: "paris",
    days: [1, 2, 3, 4]
  },

  // Mallorca
  {
    category: "交通",
    description: "巴黎 → 马略卡 航班（4人）",
    amount: 800,
    currency: "EUR",
    segment: "mallorca",
    days: [5]
  },
  {
    category: "住宿",
    description: "Hilton Mallorca Galatzo（6晚）",
    amount: 2400,
    currency: "EUR",
    segment: "mallorca",
    days: [5, 6, 7, 8, 9, 10]
  },
  {
    category: "交通",
    description: "租车（6天，€100/天）",
    amount: 600,
    currency: "EUR",
    segment: "mallorca",
    days: [5, 6, 7, 8, 9, 10]
  },
  {
    category: "活动",
    description: "网球训练课程（5天 × 5人 × €60）",
    amount: 1500,
    currency: "EUR",
    segment: "mallorca",
    days: [6, 7, 8]
  },
  {
    category: "餐饮",
    description: "马略卡餐饮估算（6天，每天约120欧）",
    amount: 720,
    currency: "EUR",
    segment: "mallorca",
    days: [5, 6, 7, 8, 9, 10]
  },
  {
    category: "交通",
    description: "汽油费用",
    amount: 150,
    currency: "EUR",
    segment: "mallorca",
    days: [5, 6, 7, 8, 9, 10]
  },

  // Switzerland
  {
    category: "交通",
    description: "马略卡 → 瑞士 航班（4人）",
    amount: 800,
    currency: "EUR",
    segment: "swiss",
    days: [11]
  },
  {
    category: "住宿",
    description: "Interlaken 酒店（4晚）",
    amount: 1600,
    currency: "CHF",
    segment: "swiss",
    days: [11, 12, 13, 14]
  },
  {
    category: "住宿",
    description: "苏黎世机场酒店（1晚）",
    amount: 250,
    currency: "CHF",
    segment: "swiss",
    days: [15]
  },
  {
    category: "交通",
    description: "Swiss Travel Pass（4人，连续4天）",
    amount: 1200,
    currency: "CHF",
    segment: "swiss",
    days: [11, 12, 13, 14]
  },
  {
    category: "门票",
    description: "Jungfraujoch 少女峰（4人，STP折扣后）",
    amount: 320,
    currency: "CHF",
    segment: "swiss",
    days: [12]
  },
  {
    category: "门票",
    description: "Grindelwald First / 缆车票（4人）",
    amount: 200,
    currency: "CHF",
    segment: "swiss",
    days: [12]
  },
  {
    category: "门票",
    description: "Trümmelbach Falls 门票（4人）",
    amount: 48,
    currency: "CHF",
    segment: "swiss",
    days: [13]
  },
  {
    category: "交通",
    description: "湖上游船票（Lake Thun/Brienz）",
    amount: 100,
    currency: "CHF",
    segment: "swiss",
    days: [11]
  },
  {
    category: "餐饮",
    description: "瑞士餐饮估算（5天，每天约180瑞郎）",
    amount: 900,
    currency: "CHF",
    segment: "swiss",
    days: [11, 12, 13, 14, 15]
  },

  // Overall
  {
    category: "交通",
    description: "新加坡 ↔ 巴黎 往返机票（4人）",
    amount: 6000,
    currency: "SGD",
    segment: "overall"
  },
  {
    category: "交通",
    description: "苏黎世 → 新加坡 返程航班（4人）",
    amount: 5000,
    currency: "SGD",
    segment: "overall"
  },
  {
    category: "保险",
    description: "旅游保险（4人，16天）",
    amount: 800,
    currency: "SGD",
    segment: "overall"
  },
  {
    category: "其他",
    description: "签证费用（申根签证，4人）",
    amount: 400,
    currency: "SGD",
    segment: "overall"
  }
];
