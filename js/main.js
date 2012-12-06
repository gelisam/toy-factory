function AppViewModel() {
  this.text = ko.observable("Hello World");
}

ko.applyBindings(new AppViewModel());
