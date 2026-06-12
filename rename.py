import os

def replace_in_files(directory, old_str, new_str):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.jsx', '.js', '.html', '.css', '.md')):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    if old_str in content:
                        content = content.replace(old_str, new_str)
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(content)
                        print(f'Updated {filepath}')
                except Exception as e:
                    print(f'Error {filepath}: {e}')

replace_in_files('c:/Users/J/Python/Business_Plan/src', 'Europa-Park Istanbul', 'Aquarena Istanbul')
replace_in_files('c:/Users/J/Python/Business_Plan/public', 'Europa-Park Istanbul', 'Aquarena Istanbul')
replace_in_files('c:/Users/J/Python/Business_Plan/src', 'Europa-Park Istanbul', 'Aquarena Istanbul')
