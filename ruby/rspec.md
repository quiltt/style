# Rspec
**Canonical Reference:** [Better Specs](https://www.betterspecs.org/)

## Shared Examples
For shared examples prefer using `_examples.rb` suffix, mirroring the `_spec` file suffix making it easier to sort through shared examples, specs, and accidental misnames (no suffix) that won't be picked up by the runner.

For the shared examples themselves perfer complimentary naming, with describe blocks to make the output easy to trace.
```ruby
RSpec.shared_examples 'Concern Examples' do
  describe 'Concern Examples' do
    ...
  end
end
```

```ruby
require_relative 'concerns/concern_examples'

include_examples 'Concern Examples'
```
