---
title: Configuration
layout: pagetoc
---

_Configuration_ page contains tools related to _BLI_ configuration.
> E.g. download current configuration into a local file, upload _BLI_ configuration from a local file or create snapshot of your current configuration in case a modification will be made and you want the possibility 
to rollback your configuration. Below, the different tools in the _Configuration_ page are described.

### Save revision

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/save-revision-1.png" class="img-fluid" alt="Save revision 1"/>
</div>
<br>

Saving a revision means saving the current configuration internally in the _BLI_. In the _Description entry_ field, a tag can be entered which 
will be added as the revision label with the following syntax: _rNN | Jan 25, 2015 08:55:37 PM | \<tag\>_, where _NN_ is a 
revision number. Such savings are useful when changes have been made to the configuration. The saved revision is available in the 
[Revision history](#revision-history) list where it is placed in the bottom of the list and from where it can be restored. The current 
configuration is saved internally in the _BLI_ when the _Save_ button is pressed. By doing this the recent autosaved file (see below) will be discarded.

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/save-revision-2.png" class="img-fluid" alt="Save revision 2"/>
</div>
<br>

Up to ten revisions of the configuration can be saved. If a manual _Save revision_ is not made the most recent autosaved file will be the recent 
saved configuration.

When a configuration of the _BLI_ takes place and the operator has not saved it through a manual _Save revision_ action, the
configuration will be saved every 5 minutes while configuration activities are ongoing. If configurations are 
made and left unsaved and the _BLI_ is idle for more than 30 seconds, autosave will also take place. These files are added to the 
[Revision history](#revision-history) list and marked with the tag: _"Auto save"_. 

If the autosaved configuration is newer than the manual _Save revision_, in the case of a power failing or any other system malfunction, the _BLI_ will - when restarted - use the autosaved configuration file.

### Quick save revision

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/quick-save-revision.png" class="img-fluid" alt="Quick save revision"/>
</div>
<br>

_Quick save revision_ works similar to _Save revision_ but with the difference that in [Revision history](#revision-history) there is only one 
_Quick save revision_ of the configuration and each _Quick save revision_ made will overwrite the previous one. This tool is useful for saving an 
instant image of _BLI_ configuration when small changes in the programming are being made. Key shortcut for the _Quick save revision_ is 
_Ctrl+Shift+S_.

### Load from file

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/load-conf-1.png" class="img-fluid" alt="Load conf 1"/>
</div>
<br>

Used to upload a configuration file from your local drive; where the file was saved at an earlier stage (see [Download to file](#download-to-file)
section). By selecting **Configuration > Load from file** a configuration file can be uploaded on to the _BLI_. The uploaded configuration will 
become active immediately and substitute the current configuration.

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/load-conf-2.png" class="img-fluid" alt="Load conf 2"/>
</div>
<br>

### Download to file {#download-to-file}

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/download-conf.png" class="img-fluid" alt="Download conf"/>
</div>
<br>

Used to download current configuration to your local drive. By selecting **Configuration > Download to file** the current configuration will be 
downloaded. It is recommended to have such configuration file as a reference or as a back-up if a problem occurs.

### Revision history {#revision-history}

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/revision-history.png" class="img-fluid" alt="Revision history"/>
</div>
<br>

The _BLI_ keeps a record of the latest ten configuration revisions. A new revision can be saved and marked with relevant tag information by 
selecting **Configuration > Save revision**. Autosaved and Quick saved revisions are listed in the _Revision history_ and are marked with the tags
 _"Auto save"_ and _"Quick save"_.