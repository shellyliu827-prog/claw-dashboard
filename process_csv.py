import csv
import re
from datetime import datetime

input_path = "/Users/shelly0827/Downloads/ExportBlock-c846f719-2898-47a6-b69f-e6b0f93fcf37-Part-1/跳舞记录 13014b95b98880c1ba77e299186f027f_all.csv"
output_path = "/Users/shelly0827/WorkBuddy/20260407154953/dance-log.csv"

def clean_notion_link(val):
    """去掉 Notion 链接格式，只保留纯文本"""
    if not val:
        return ""
    # 去掉 (https://...) 括号和链接
    val = re.sub(r'\s*\(https?://[^\)]+\)', '', val)
    return val.strip().strip('"')

def parse_date(val):
    """把 'March 11, 2023' 转为 '2023-03-11'"""
    val = val.strip()
    try:
        return datetime.strptime(val, "%B %d, %Y").strftime("%Y-%m-%d")
    except:
        return val

rows = []
with open(input_path, encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        date_raw = row.get('日期', '').strip()
        if not date_raw:
            continue
        
        teacher_raw = row.get('老师', '')
        city_raw = row.get('城市', '')
        genre_raw = row.get('课程', '')
        song_raw = row.get('教学内容', '')
        venue_raw = row.get('舞房/门店', '')
        
        teacher = clean_notion_link(teacher_raw)
        city = clean_notion_link(city_raw)
        genre = clean_notion_link(genre_raw).strip()
        song = clean_notion_link(song_raw).strip()
        venue = clean_notion_link(venue_raw).strip()
        date = parse_date(date_raw)
        
        # 标准化老师名（去掉末尾数字如"可可2"→"可可"，保留常用名）
        # 不自动改，原样保留，让用户自己决定
        
        rows.append({
            'date': date,
            'teacher': teacher,
            'genre': genre,
            'song': song,
            'city': city,
            'venue': venue,
        })

# 按日期排序
rows.sort(key=lambda x: x['date'])

with open(output_path, 'w', encoding='utf-8', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=['date','teacher','genre','song','city','venue'])
    writer.writeheader()
    writer.writerows(rows)

print(f"Done. Total rows: {len(rows)}")
print(f"Date range: {rows[0]['date']} → {rows[-1]['date']}")

# 打印一些统计
from collections import Counter
genres = Counter(r['genre'] for r in rows)
print("\n舞种统计:")
for g, c in genres.most_common():
    print(f"  {g}: {c}")

teachers = Counter(r['teacher'] for r in rows if r['teacher'])
print("\n老师统计 Top 15:")
for t, c in teachers.most_common(15):
    print(f"  {t}: {c}")
