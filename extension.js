const St = imports.gi.St;
const Main = imports.ui.main;
const GLib = imports.gi.GLib;
const Util = imports.misc.util;

const motePath = '/home/' + GLib.get_user_name() + '/.bin/mote'

function _pause() {
  Util.spawn([motePath, 'pause']);
}

function _prev() {
  Util.spawn([motePath, 'prev']);
}

function _next() {
  Util.spawn([motePath, 'next']);
}

function init() {
  buttonPrev = new St.Button({ style_class: 'panel-button'});
  let icon = new St.Icon({ icon_name: 'media-skip-forward-symbolic-rtl',
                           style_class: 'system-status-icon' });
  buttonPrev.set_child(icon);
  buttonPrev.connect('button-press-event', _prev);

  buttonPause = new St.Button({ style_class: 'panel-button'});
  let icon = new St.Icon({ icon_name: 'media-playback-pause-symbolic',
                           style_class: 'system-status-icon' });
  buttonPause.set_child(icon);
  buttonPause.connect('button-press-event', _pause);

  buttonNext = new St.Button({ style_class: 'panel-button'});
  let icon = new St.Icon({ icon_name: 'media-skip-forward-symbolic',
                           style_class: 'system-status-icon' });
  buttonNext.set_child(icon);
  buttonNext.connect('button-press-event', _next);
}

function enable() {
  Main.panel._rightBox.insert_child_at_index(buttonNext, 2);
  Main.panel._rightBox.insert_child_at_index(buttonPause, 2);
  Main.panel._rightBox.insert_child_at_index(buttonPrev, 2);
}

function disable() {
  Main.panel._rightBox.remove_child(buttonPrev);
  Main.panel._rightBox.remove_child(buttonPause);
  Main.panel._rightBox.remove_child(buttonNext);
}
