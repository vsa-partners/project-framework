# Build the following into common.js

#<script src="_cme/js/example1.js?v=1"></script>
#<script src="_cme/js/example2.js?v=1"></script>

java -jar compiler.jar --js=../example1.js --js=../example2.js --js_output_file=../common.js;