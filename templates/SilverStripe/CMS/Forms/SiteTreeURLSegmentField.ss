<div class="preview-holder">
    <a class="URL-link"
       href="$URL"
       target="_blank"
       title="<%t SilverStripe\\CMS\\Forms\\SiteTreeURLSegmentField.ViewDraft 'View the draft page' %>">
        <%-- An aria-label attribute is dynamically added in SiteTreeURLSegmentField.js --%>
        $URL
    </a>
    <% if not $IsReadonly %>
        <button role="button" type="button" class="btn btn-outline-secondary btn-sm edit font-icon-edit">
            <%t SilverStripe\CMS\Forms\SiteTreeURLSegmentField.Edit 'Edit' %>
        </button>
    <% end_if %>
    <button role="button" type="button" class="btn btn-outline-secondary btn-sm copy font-icon-p-multi">
        <%t SilverStripe\CMS\Forms\SiteTreeURLSegmentField.CopyLink 'Copy link' %>
    </button>
</div>

<div class="edit-holder">
    <div class="input-group">
        <input $AttributesHTML />
        <button role="button" type="button" class="btn btn-primary update font-icon-tick">
            <%t SilverStripe\CMS\Forms\SiteTreeURLSegmentField.OK 'OK' %>
        </button>
        <button role="button" type="button" class="btn btn-outline-secondary btn-sm cancel font-icon-cancel">
            <%t SilverStripe\CMS\Forms\SiteTreeURLSegmentField.Cancel 'Cancel' %>
        </button>
    </div>
    <% if $HelpText %><p class="form__field-description">$HelpText</p><% end_if %>
</div>
