class window.AppView extends Backbone.View

  el: '#content',

  initialize: ->
    console.log 'initializing'
    @render()

  render: ->
    console.log 'rendering'
    @$el.html("hello world")
