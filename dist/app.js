(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.AppView = (function(superClass) {
    extend(AppView, superClass);

    function AppView() {
      return AppView.__super__.constructor.apply(this, arguments);
    }

    AppView.prototype.el = '#content';

    AppView.prototype.initialize = function() {
      console.log('initializing');
      return this.render();
    };

    AppView.prototype.render = function() {
      console.log('rendering');
      return this.$el.html("hello world");
    };

    return AppView;

  })(Backbone.View);

}).call(this);

//# sourceMappingURL=app.js.map
