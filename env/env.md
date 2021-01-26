# Env

1. Creates environment file
   Takes credentials passed in and merges them with the current env file.
   It will only merge credentials that have the same key as those in the env file.

2. Parses environments by looking at the window object `__ENV__`
