# Pagination Helper

This project includes a helper function for pagination. The `index_range` function computes the start and end indices for pagination.

## Usage

```python
from pagination import index_range

start_index, end_index = index_range(page=1, page_size=7)
print(start_index, end_index)  # Output: 0 7
