class window.AppView extends Backbone.View

  el: '#content',

  initialize: ->
    console.log 'initializing'
    # form = '
    #   <form>
    #     <input type="text">
    #     <input class="submit" type="button">
    #   </form>
    # '
    # @$el.append(form);
    @render()

  render: ->
    console.log 'rendering'
    @$el.html("hello world")
