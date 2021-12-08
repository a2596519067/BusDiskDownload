import os
import time

import execjs
import requests
from lxml import etree

link = input('请输入网页分享链接\n')
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 Edg/95.0.1020.44',
    'Referer': '',
}
data = {
    'action': 'load_down_addr1',
    'file_id': '',
    'vipd': '0',
}
session = requests.session()
# 获取cookie
session.get('http://www.tadaigou.com/')
node = execjs.get()
# 获取分享链接的html
# 从html提取文件名和下载页面html
resp = session.post(url=link, headers=headers)
resp.encoding = 'utf-8'
dl_html_text = resp.text
tree = etree.HTML(dl_html_text)
dl_file_name = tree.xpath('//span[@class="down_one_lf_tl"]/text()')[0]
dl_file_name = str(dl_file_name).rsplit()[0]
file_id = dl_html_text.split('add_ref(', 2)[2].split(')', 1)[0]
# 访问下载页面获取最终下载链接
data['file_id'] = file_id
headers['Referer'] = link.replace('file', 'down').replace('ibuspan', 'tadaigou')
url = 'http://www.tadaigou.com/ajax.php'
dl_link_text = session.post(url=url, headers=headers, data=data).text
dl_link = dl_link_text.split('\"')[1]
# 下载及保存文件
print("下载文件数据开始\n")
strat_time = time.time()
file_data = session.get(url=dl_link, headers=headers).content
end_time = time.time()
print("下载完毕!!\n")


def save_file(dl_file_name):
    fileName = 'file\\' + dl_file_name
    with open(fileName, 'wb') as fp:
        fp.write(file_data)
    fSize = os.path.getsize(fileName)
    print("下载完成：" + dl_file_name)
    print("速度:" + str((fSize / 1024) / (end_time - strat_time)) + 'KB/S')
    print("文件大小:" + str(fSize / 1024) + "KB")


fileName = 'file\\' + dl_file_name
if os.path.exists(fileName):
    new_file_name = str(time.time()) + "_" + dl_file_name
    ask = input('文件' + dl_file_name + '已存在！是否继续(继续将保存为' + new_file_name + ')y/n\n')
    if ask == 'y' or ask == 'Y':
        save_file(new_file_name)
else:
    save_file(dl_file_name)
os.system('pause')
