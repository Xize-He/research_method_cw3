
import matplotlib.pyplot as plt

# 数据：年份和论文数量
years = [2003, 2008, 2013, 2018, 2023, 2024]
counts = [1, 1, 1, 1, 1, 5]

# 创建直方图
plt.figure(figsize=(8, 4))  # 尺寸：宽8英寸，高4英寸
plt.bar(years, counts, color='#4682B4', width=0.8)  # 钢蓝色柱形，宽度适中

# 设置标题和标签
plt.title('Distribution of Publication Years for LLM Papers', fontsize=14)
plt.xlabel('Year', fontsize=12)
plt.ylabel('Number of Papers', fontsize=12)

# 设置X轴刻度
plt.xticks(years, fontsize=10)  # 显示具体年份
plt.yticks(range(0, 6), fontsize=10)  # Y轴从0到5

# 添加网格线（Y轴）
plt.grid(axis='y', linestyle='--', alpha=0.5)

# 调整布局
plt.tight_layout()

# 保存和显示
plt.savefig('D:/Coursework_2024/research method/survis-master/survis-master/src/data/publication_years_histogram.png')
plt.show()