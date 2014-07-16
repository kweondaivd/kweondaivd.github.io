
@echo off
if exist report.txt ( if exist report.html (del report.html && ren report.txt report.html && start report.html) else ren report.txt report.html && start report.html) else (ren report.html report.txt)
