/*!
 * rovalra v2.6.8
 * License: GPL-3.0
 * Repository: https://github.com/NotValra/RoValra
 * This extension is provided AS-IS without warranty.
 */
(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });

  // src/content/core/transactions/fiatConfig.js
  var ROBUX_FIAT_RATE_MODE_NORMAL = "normal", ROBUX_FIAT_RATE_MODE_DEVEX = "devex";
  var ROBUX_FIAT_ESTIMATE_DEFAULT_GRADIENT = {
    enabled: !0,
    color1: "#5fa8ff",
    color2: "#d05bff",
    angle: 90,
    fade: 100
  };
  var TRANSACTION_FIAT_CURRENCY_OPTIONS = [
    { value: "USD", label: "USD - US Dollar" },
    { value: "EUR", label: "EUR - Euro" },
    { value: "GBP", label: "GBP - British Pound" },
    { value: "CAD", label: "CAD - Canadian Dollar" },
    { value: "AUD", label: "AUD - Australian Dollar" },
    { value: "NZD", label: "NZD - New Zealand Dollar" },
    { value: "JPY", label: "JPY - Japanese Yen" },
    { value: "CNY", label: "CNY - Chinese Yuan" },
    { value: "HKD", label: "HKD - Hong Kong Dollar" },
    { value: "SGD", label: "SGD - Singapore Dollar" },
    { value: "KRW", label: "KRW - South Korean Won" },
    { value: "TWD", label: "TWD - Taiwan Dollar" },
    { value: "INR", label: "INR - Indian Rupee" },
    { value: "PKR", label: "PKR - Pakistani Rupee" },
    { value: "BDT", label: "BDT - Bangladeshi Taka" },
    { value: "IDR", label: "IDR - Indonesian Rupiah" },
    { value: "MYR", label: "MYR - Malaysian Ringgit" },
    { value: "PHP", label: "PHP - Philippine Peso" },
    { value: "THB", label: "THB - Thai Baht" },
    { value: "VND", label: "VND - Vietnamese Dong" },
    { value: "AED", label: "AED - UAE Dirham" },
    { value: "SAR", label: "SAR - Saudi Riyal" },
    { value: "QAR", label: "QAR - Qatari Riyal" },
    { value: "KWD", label: "KWD - Kuwaiti Dinar" },
    { value: "BHD", label: "BHD - Bahraini Dinar" },
    { value: "OMR", label: "OMR - Omani Rial" },
    { value: "ILS", label: "ILS - Israeli New Shekel" },
    { value: "EGP", label: "EGP - Egyptian Pound" },
    { value: "NGN", label: "NGN - Nigerian Naira" },
    { value: "KES", label: "KES - Kenyan Shilling" },
    { value: "MAD", label: "MAD - Moroccan Dirham" },
    { value: "ZAR", label: "ZAR - South African Rand" },
    { value: "CHF", label: "CHF - Swiss Franc" },
    { value: "SEK", label: "SEK - Swedish Krona" },
    { value: "NOK", label: "NOK - Norwegian Krone" },
    { value: "DKK", label: "DKK - Danish Krone" },
    { value: "ISK", label: "ISK - Icelandic Krona" },
    { value: "PLN", label: "PLN - Polish Zloty" },
    { value: "CZK", label: "CZK - Czech Koruna" },
    { value: "HUF", label: "HUF - Hungarian Forint" },
    { value: "RON", label: "RON - Romanian Leu" },
    { value: "BGN", label: "BGN - Bulgarian Lev" },
    { value: "HRK", label: "HRK - Croatian Kuna" },
    { value: "RSD", label: "RSD - Serbian Dinar" },
    { value: "UAH", label: "UAH - Ukrainian Hryvnia" },
    { value: "RUB", label: "RUB - Russian Ruble" },
    { value: "KZT", label: "KZT - Kazakhstani Tenge" },
    { value: "TRY", label: "TRY - Turkish Lira" },
    { value: "BRL", label: "BRL - Brazilian Real" },
    { value: "MXN", label: "MXN - Mexican Peso" },
    { value: "ARS", label: "ARS - Argentine Peso" },
    { value: "CLP", label: "CLP - Chilean Peso" },
    { value: "COP", label: "COP - Colombian Peso" },
    { value: "PEN", label: "PEN - Peruvian Sol" },
    { value: "UYU", label: "UYU - Uruguayan Peso" },
    { value: "VES", label: "VES - Venezuelan Bolivar" }
  ], TRANSACTION_FIAT_RATE_OPTIONS = [
    {
      value: ROBUX_FIAT_RATE_MODE_NORMAL,
      label: "Normal Purchase Rate"
    },
    {
      value: ROBUX_FIAT_RATE_MODE_DEVEX,
      label: "DevEx Cash-Out Rate"
    }
  ];

  // src/content/core/backgroundImage.js
  var DEFAULT_BACKGROUND_IMAGE = Object.freeze({
    source: "",
    opacity: 1,
    size: "cover",
    customSize: 100,
    position: "center",
    repeat: "no-repeat",
    blur: 0,
    overlayColor: "#000000",
    overlayOpacity: 0,
    overrideTopbarSidebar: !1
  });

  // src/content/core/settings/settingConfig.js
  var SETTINGS_CONFIG = {
    Marketplace: {
      title: "Marketplace",
      settings: {
        itemSalesEnabled: {
          label: "Item Sales",
          contributors: [447170745],
          description: [
            "This shows the most up to date sales and revenue data we have.",
            "The sales data is very likely to be inaccurate on items that are for sale, but very likely to be correct on offsale items."
          ],
          deprecated: "Sale stats are very old and now inaccurate.",
          type: "checkbox",
          default: !1
        },
        SaveLotsRobuxEnabled: {
          label: "Save 10%-40% Robux on Purchases",
          description: [
            "This adds a button allowing you to save 40% on items on the marketplace.",
            "Keep in mind, a group is required for this to work.",
            "**When buying something there will be a 'Save X Robux' Button which when pressed will set up the experience required for it to work for you, if not already set up.**"
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            RobuxPlaceId: {
              label: "Place ID to use for the 10%-40% Robux back",
              description: [
                "It is best not to modify this, as the feature automatically sets the correct place ID when used.",
                "**Don't change this unless you know what you're doing.**"
              ],
              type: "input",
              default: null,
              placeholder: "Enter Place ID here..."
            },
            configureGame: {
              label: "Configure Experience",
              description: "Open the setup to configure an experience for the 40% method without needing to be in a purchase flow.",
              type: "button",
              buttonText: "Open Setup",
              event: "rovalra:open40methodSetup"
            }
          }
        },
        marketplace3DRenderEnabledV2: {
          label: "Enable Custom 3D Marketplace Item Renderer",
          description: [
            "Adds a try-on preview when hovering over items and adds a feature-rich 3D renderer to item pages.",
            "This feature was made possible because of {{[RoAvatar](https://github.com/steinann/RoAvatar) githubLink}} \u2764\uFE0F"
          ],
          type: "checkbox",
          default: !0,
          contributors: ["126448532"],
          childSettings: {
            marketplace3DRenderHoverPreviewDisabled: {
              label: "Disable Hover Preview",
              description: "Disables the 3D try-on preview when hovering over marketplace items.",
              type: "checkbox",
              default: !1
            }
          }
        },
        EnableRobuxAfterPurchase: {
          label: "Robux After Purchase",
          description: "This feature restores the 'Your balance after this transaction will be X' text to the new Roblox purchase UI after it was removed.",
          type: "checkbox",
          default: !0
        },
        bonusItemEnabled: {
          label: "Robux Purchase Bonus Item Selector",
          description: "Adds a bonus item selector to eligible Robux purchases of 2,000 Robux or more.",
          type: "checkbox",
          default: !1,
          beta: "Currently missing gamepasses."
        },
        EnableItemDependencies: {
          label: "Item Dependencies",
          description: [
            "This feature shows an item's dependencies, which means you can view the texture, mesh, and more."
          ],
          type: "checkbox",
          default: !0
        },
        friendOwnershipEnabled: {
          label: "Friends Who Own the Item",
          description: "Shows which of your friends own the item.",
          type: "checkbox",
          default: !0
        },
        priceFloorEnabled: {
          label: "Show Price Floor",
          description: "This will show the price floor when viewing items, and shows if the item you're viewing is sold at or above the price floor.",
          type: "checkbox",
          default: !0
        },
        ParentItemsEnabled: {
          label: "Show what bundle an item is a part of.",
          description: "When viewing items pages of items inside of a bundle it will tell you what bundle that item is from.",
          type: "checkbox",
          default: !0
        },
        PreviousPriceEnabled: {
          label: "Previous Price to item cards and on item pages.",
          description: "This shows the price of an offsale item before it went offsale and when it was last on sale.",
          type: "checkbox",
          default: !0
        },
        lastEquippedEnabled: {
          label: "Last Equipped on Item Pages",
          description: "Shows when you last equipped an item on item pages.",
          type: "checkbox",
          default: !0,
          contributors: ["4866259395", "447170745"]
        },
        itemTradingEnabled: {
          label: "Item Trading Info",
          description: [
            "Shows Rolimons values, demand, trend, rare, projected and more on item pages."
          ],
          type: "checkbox",
          default: !0
        }
      }
    },
    Games: {
      title: "Experiences",
      settings: {
        PreferredRegionEnabled: {
          label: "Preferred Region Play Button",
          description: [
            "This adds a play button that joins your preferred region.",
            "This also automatically serverhops.",
            "If you have this enabled along with Quick Play, there will be a Preferred Region quick play button."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["8345351117", "447170745"],
          childSettings: {
            robloxPreferredRegion: {
              label: "Preferred Region",
              description: [
                "Select your preferred region for joining experiences.",
                "**Automatic** will automatically attempt to find the closest region to you."
              ],
              type: "select",
              options: "REGIONS",
              showFlags: !0,
              default: "AUTO"
            },
            preferredRegionUseRobloxLatencyv1: {
              label: "Prioritize biggest servers when using Automatic Mode",
              description: [
                "This makes Preferred Region join the servers closest to you with the most players.",
                "May cause issues with some VPNs"
              ],
              type: "checkbox",
              default: !1
            },
            preferredRegionLocalSearchEnabled: {
              label: "Force Local Server Search",
              description: [
                "Searches Roblox servers locally instead of using RoValra to find servers by region.",
                "**This isn't recommended for normal users, as it'll be much slower.**"
              ],
              type: "checkbox",
              default: !1
            }
          }
        },
        QuickPlayEnable: {
          label: "Quick Play Button",
          description: [
            "This will add a quick play button to experiences so you can quickly join the experience without opening the experience page.",
            "If you have Preferred Region Play Button enabled it will also add a Preferred Region quick play button to quickly join your preferred region.",
            "This is made to look like the official Roblox client's Quick Play button."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["48255812", "447170745"],
          childSettings: {
            privateservers: {
              label: "Show Private Servers in Quick Play",
              description: [
                "This adds a button to quickly browse and join private servers to the quick play."
              ],
              type: "checkbox",
              default: !0
            },
            PaidAccessPriceBadgeEnabled: {
              label: "Show Paid Game Access Price",
              description: [
                "This adds a small box that shows the price of paid Games."
              ],
              type: "checkbox",
              default: !0,
              contributors: ["10646979010"]
            },
            playbuttonpreferredregionenabled: {
              label: "Change the normal Play button to join your preferred region in Quick Play",
              description: [
                "This makes the Roblox Play button in the Quick Play join servers closest to you, instead of a random region."
              ],
              type: "checkbox",
              default: !0
            }
          }
        },
        wideGameTileStatsEnabled: {
          label: "Player Counts on Wide Tiles",
          description: [
            "Shows the concurrent player count alongside the rating on wide experience tiles."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["2963377564", "2333236354"]
        },
        whatamIJoiningEnabled: {
          label: "What Am I Joining",
          description: [
            "This shows the server ID, region, if it's a private server, and more info about the server you're joining when joining an experience."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["447170745", "8345351117"],
          childSettings: {
            AlwaysGetInfo: {
              label: "Always Get Server Info",
              description: [
                "This will always get the server info, even if no server data is available.",
                "It has a very small chance to get inaccurate information."
              ],
              type: "checkbox",
              default: !0
            },
            closeUiByClickingTheBackground: {
              label: "Close the 'What am I joining' UI by clicking the background",
              description: "This allows you to click the background to close the UI, can be annoying if you want to see the info provided in the UI",
              type: "checkbox",
              default: !0
            }
          }
        },
        EnableImprovedEvents: {
          label: "Improved Events",
          description: "This allows you to view past events on experiences and how many are going.",
          type: "checkbox",
          default: !0
        },
        EnableGameTrailer: {
          label: "Experience Trailer",
          description: [
            "This adds experience trailers not on YouTube to the website, replacing Roblox's way of doing it.",
            "As a result, it adds quality-of-life features such as full-screen playback, autoplay controls, video length, playback speed, and picture-in-picture mode."
          ],
          type: "checkbox",
          default: !1,
          locked: "This feature broke, and Roblox made its own version.",
          isPermanent: !0,
          childSettings: {
            Enableautoplay: {
              label: "Auto Play Trailer",
              description: [
                "This will automatically play the trailer."
              ],
              type: "checkbox",
              default: !0
            }
          }
        },
        EnableDevProducts: {
          label: "View Developer Products",
          description: "This allows you to view the developer products of an experience directly on the store page.",
          type: "checkbox",
          default: !0,
          contributors: ["447170745", "10646979010"]
        },
        shopWidgetsEnabled: {
          label: "View In-Game Shop",
          description: "This adds a Shop tab to the experience store page, bringing the in-game shop to the website.",
          type: "checkbox",
          default: !0
        },
        QuickOutfitsEnabled: {
          label: "Quick Equip Outfits",
          description: [
            "This allows you to quickly switch your avatar on an experience page."
          ],
          type: "checkbox",
          default: !1
        },
        privateGameViewerEnabled: {
          label: "View Private / Moderated Games",
          description: [
            "This recreates the games page of private / moderated games, allowing you to view them."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            privateGameDetectionFallbackEnabled: {
              label: "Use Robust Private / Moderated Games Detection",
              description: [
                "This makes sure it can identify when you're trying to view a private or moderated game.",
                "Without this, it may fail to show private or moderated game pages when you open their links directly."
              ],
              type: "checkbox",
              default: !1,
              requiredPermissions: ["webRequest"]
            }
          }
        },
        gamePassViewerEnabled: {
          label: "View Gamepasses in Private / Moderated Games",
          description: [
            "This recreates the gamepass page of private / moderated games, allowing you to view them."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["9502859424"]
        },
        underReviewPillEnabled: {
          label: "Show All-Ages Review Status",
          description: [
            "Shows a small notice on experience pages when Roblox is reviewing the experience for all-ages eligibility."
          ],
          type: "checkbox",
          default: !0,
          locked: "Roblox patched this feature.",
          isPermanent: !0
        },
        botdataEnabled: {
          label: "Bot Data",
          description: [
            "Shows if an experience has a lot of bots in the description of the experience.",
            "It doesn't show the amount of bots, since the sample size is too small to give an accurate number."
          ],
          type: "checkbox",
          default: !0
        },
        subplacesEnabled: {
          label: "Subplaces",
          description: [
            "This adds a tab to an experience page that shows the subplaces of the experience."
          ],
          type: "checkbox",
          default: !0
        },
        hiddenBadgesEnabled: {
          label: "Hidden Badges",
          description: [
            "Adds a Hidden Badges tab to experience pages.",
            "This only shows hidden badges of a game that you obtained."
          ],
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_badges_v1"
        },
        badgeLayoutToggleEnabled: {
          label: "Badge Layout Toggle",
          description: [
            "Adds a List / Grid toggle to experience badge sections."
          ],
          type: "checkbox",
          default: !0
        },
        badgeOwnershipEnabled: {
          label: "Dim Unowned Badges",
          description: [
            "Makes experience badges you don't own darker on badge pages. (Similar to how BTRoblox does it)"
          ],
          type: "checkbox",
          default: !0,
          contributors: [546872490]
        },
        updateHistoryEnabled: {
          label: "Update History",
          description: [
            "This adds a tab to an experience page that has a heatmap showing the update history of an experience.",
            "This feature was heavily inspired by a RoPro v2 feature."
          ],
          type: "checkbox",
          default: !0,
          beta: "This feature is lacking update history data. It will slowly get it over time."
        },
        recentServersEnabled: {
          label: "Recent Servers",
          description: [
            "Shows the 4 most recent servers you joined under an experience."
          ],
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_server_history"
        },
        TotalServersEnabled: {
          label: "Total Servers",
          description: [
            "This shows the total amount of servers RoValra is tracking under that experience."
          ],
          type: "checkbox",
          default: !0
        },
        GameVersionEnabled: {
          label: "Experience Version",
          description: [
            "This shows the current version an experience is on.",
            "Useful for developers."
          ],
          type: "checkbox",
          default: !0
        },
        TotalSpentGamesEnabled: {
          label: "Total Spent on Experience",
          description: [
            "This shows how much Robux you have spent total on this experience.",
            "This will scan your transactions in the background and store the total spent locally.",
            "This may take a few minutes to work after you first install the extension."
          ],
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_transactions_v2"
        },
        OldestVersionEnabled: {
          label: "Oldest Server Version",
          description: [
            "This shows the oldest place version that servers are still running on.",
            "Useful for developers."
          ],
          type: "checkbox",
          default: !0
        },
        ServerFilterEnabled: {
          label: "Server Filters",
          description: [
            "This adds a filter to the server list.",
            "**It is highly recommended that the 'Server List Modifications' setting is enabled for this to work correctly.**"
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            RegionFiltersEnabled: {
              label: "Region Filters",
              description: "Adds Region filters in the server list.",
              type: "checkbox",
              default: !0
            },
            UptimeFiltersEnabled: {
              label: "Uptime Filters",
              description: "Adds Server Uptime filters in the server list.",
              type: "checkbox",
              default: !0
            },
            VersionFiltersEnabled: {
              label: "Place Version Filters",
              description: "Adds Place Version filters in the server list allowing you to filter by servers running a specific place version.",
              type: "checkbox",
              default: !0
            }
          }
        },
        ServerlistmodificationsEnabled: {
          label: "Server List Modifications",
          description: [
            "This adds multiple features to the server list.",
            "These modifications will also apply to the 'Servers My Friends Are In' section."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            enableShareLink: {
              label: "Share link button",
              description: [
                "This adds a share link button under the join button so you can send a link to the server for other people to join with.",
                "This uses fishstrap.app for the share link."
              ],
              type: "checkbox",
              default: !0
            },
            EnableServerUptime: {
              label: "Server Uptime",
              description: [
                "This shows an estimate of a server's uptime in the server list.",
                "This works by RoValra tracking hundreds of thousands of servers in a database and then estimating the uptime."
              ],
              type: "checkbox",
              default: !0
            },
            EnableServerRegion: {
              label: "Server Region",
              description: [
                "This shows the server's region or location."
              ],
              type: "checkbox",
              default: !0
            },
            EnablePlaceVersion: {
              label: "Server Version",
              description: [
                "This shows the version of the experience that a specific server is running."
              ],
              type: "checkbox",
              default: !0
            },
            EnableFullServerID: {
              label: "Show the entire ServerID",
              description: [
                "This shows the entire ServerID",
                "By default Roblox only shows a part of it.",
                "It'll hide ServerIDs of servers that you're playing in or friends are playing in unless hovered over."
              ],
              type: "checkbox",
              default: !0
            },
            EnableFullServerIndicators: {
              label: "Full Server Indicators",
              description: [
                "This adds indicators when a server is full",
                "Like text that tells you the server is full if we don't have region data."
              ],
              type: "checkbox",
              default: !0
            },
            EnableServerPerformance: {
              label: "Show Server Performance",
              description: [
                "This shows the server performance, which is useful if you want to avoid poorly performing servers."
              ],
              type: "checkbox",
              default: !0
            },
            EnableMiscIndicators: {
              label: "Show misc indicators",
              description: [
                "This shows indicators for servers you can't join, such as when someone is playing in a private server."
              ],
              type: "checkbox",
              default: !0
            },
            EnableDatacenterandId: {
              label: "Show Datacenter ID and Server Ip",
              description: "This shows the Datacenter ID server Ip of servers in the server list.",
              type: "checkbox",
              default: !1
            }
          }
        },
        PrivateQuickLinkCopy: {
          label: "Quick Private Server Link Copy and Generation",
          description: [
            "This allows you to quickly copy a private server link or generate a new private server link."
          ],
          type: "checkbox",
          default: !0
        }
      }
    },
    Profile: {
      title: "Profile",
      settings: {
        userGamesEnabled: {
          label: "Hidden User Experiences",
          description: [
            "Shows a user's hidden experiences on their profile."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["8345351117", "447170745"]
        },
        avatarDownloadEnabled: {
          label: "Download Avatar",
          description: [
            "Adds a button to save avatar as a PNG on their profile."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["9502859424"]
        },
        profilePronouns: {
          label: "Profile Pronouns",
          description: [
            "Displays your pronouns beside your username on your profile for other RoValra users.",
            "Maximum 15 characters.",
            "Emojis and spaces are allowed. Special characters such as /, comma, or ; are changed to |."
          ],
          type: "input",
          placeholder: "Enter Pronouns",
          maxLength: 15,
          showCharacterCount: !0,
          useGraphemeLength: !0,
          trim: !0,
          replaceSpecialCharactersWithPipe: !0,
          agreementKey: "rovalra_pronouns_guidelines_agreed",
          default: null,
          contributors: ["10646979010"]
        },
        displayAppThemeUserProfile: {
          label: "Display app theme user profiles",
          description: [
            "Displays users app theme on their profile!"
          ],
          type: "checkbox",
          default: !1,
          childSettings: {
            displayAppThemeOwnProfile: {
              label: "Display your app theme on your profile",
              description: [
                "Displays your app theme on your profile to other users!",
                "To change this setting, you can go to [Roblox Settings > Browser preferences > App theme](https://www.roblox.com/my/account#!/browser-preferences)",
                "Enabling this setting will automatically turn on **Free Roblox Plus Themes**."
              ],
              type: "checkbox",
              default: !1,
              donatorTier: 1,
              donatorReason: "Donator Tier 1 is required to display your app theme on your own profile",
              dependsOn: ["FreeRobloxPlusThemesEnabledv3"]
            }
          },
          contributors: ["650766686"],
          dependedBy: ["displayAppThemeOwnProfile"]
        },
        profileNotesEnabled: {
          label: "Profile Notes",
          description: [
            "Adds a private note field to Roblox profiles.",
            "Notes are stored only locally and are never shared to RoValra or Roblox.",
            "Maximum 256 characters."
          ],
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_profile_notes",
          contributors: ["10646979010"],
          childSettings: {
            profileNotesBackup: {
              label: "Notes Backup",
              description: [
                "Export all profile notes or import them from a .json file.",
                "Imported notes are merged with notes already stored in this browser."
              ],
              type: "buttonGroup",
              buttons: [
                {
                  id: "export-rovalra-profile-notes",
                  text: "Export Notes"
                },
                {
                  id: "import-rovalra-profile-notes",
                  text: "Import Notes"
                }
              ]
            }
          }
        },
        profileViewsEnabled: {
          label: "Profile Views",
          description: [
            "Shows profile view counts on profiles.",
            "Disabling this hides profile views locally and hides your profile views from other RoValra users.",
            "Credit to [syra](https://www.roblox.com/users/170038374/profile) for making a concept which this feature is based on."
          ],
          type: "checkbox",
          default: !0
        },
        creatorStatsEnabled: {
          label: "Creator Stats",
          description: [
            "Shows a user's combined CCU, experience visits, and owned community member count on their profile."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["4632962611"]
        },
        socialLinksEnabled: {
          label: "Profile Social Links",
          description: [
            "Shows social links below the profile description."
          ],
          type: "checkbox",
          default: !1
        },
        profileCustomizationEnabled: {
          label: "Profile Customization",
          description: [
            "Adds a customization button to your own profile for quickly switching avatar borders."
          ],
          type: "checkbox",
          default: !0
        },
        profileShowcaseEnabled: {
          label: "Profile Showcase",
          description: [
            "Adds a Showcase tab to profiles for featuring a favourite experience and community.",
            "Credit to [syra](https://www.roblox.com/users/170038374/profile) for making a concept which this feature is based on."
          ],
          type: "checkbox",
          default: !0
        },
        chatEligibilityTooltipEnabled: {
          label: "Chat Eligibility Tooltip",
          description: [
            "Shows if you can or can't chat with a friend, or if they haven't completed an age check, when hovering over the chat button on their profile."
          ],
          type: "checkbox",
          default: !0
        },
        userSniperEnabled: {
          label: "Instant Joiner",
          description: [
            "This joins a user instantly when they go into an experience, best used for people with a lot of people trying to join them.",
            "### Requirements",
            "- This feature requires the user to have their joins enabled for everyone or for you to be friends with them."
          ],
          type: "checkbox",
          default: !1,
          childSettings: {
            deeplinkEnabled: {
              label: "Join through deeplinks",
              description: [
                "This will use deeplinks to join the user for faster joining but may be less reliable."
              ],
              type: "checkbox",
              default: !1
            }
          }
        },
        profile3DRenderEnabled: {
          label: "Enable Custom 3D Profile Renderer",
          description: [
            "Replaces the default profile avatar with a more customizable and feature-rich 3D renderer.",
            "This feature is required for custom environments and other render-related settings.",
            "This feature was made possible because of {{[RoAvatar](https://github.com/steinann/RoAvatar) githubLink}} \u2764\uFE0F"
          ],
          type: "checkbox",
          default: !1,
          contributors: ["126448532", "447170745"],
          experimental: "This feature may cause performance issues. And may be buggy",
          childSettings: {
            profileRenderEnvironment: {
              label: "3D Profile Environment",
              description: [
                "Choose a custom environment for your own profile's 3D render.",
                "This only applies when viewing your own profile.",
                "**This is saved on RoValras database so anyone with RoValra can view it. It being saved on RoValras database used to be a tier 1 Donator perk, we are working on a replacement perk.**"
              ],
              type: "select",
              options: [
                { label: "None", value: "void", id: 1 },
                {
                  label: "Purple Space",
                  value: "purple",
                  environmentEndpoint: "/static/json/skyboxSpace.json",
                  id: 2
                },
                {
                  label: "Crossroads",
                  value: "crossroads",
                  environmentEndpoint: "/static/json/crossroads.json",
                  id: 3
                },
                {
                  label: "Baseplate",
                  value: "baseplate",
                  environmentEndpoint: "/static/json/baseplate.json",
                  id: 4
                }
              ],
              default: "void"
            },
            profileRenderRotateEnabled: {
              label: "Auto-Rotate Profile Avatar",
              description: [
                "Automatically rotates the 3D avatar on the profile page."
              ],
              type: "checkbox",
              default: !1
            },
            environmentTester: {
              label: "Enable Environment Creator",
              description: [
                "Shows the Environment Creator tool on profiles to make custom client-side environments.",
                "This is to prepare for community environments.",
                "This will overwrite all environments on profiles.",
                "**This feature should only be enabled if you plan to make environments.**"
              ],
              type: "checkbox",
              default: !1
            }
          }
        },
        groupFiltersEnabled: {
          label: "Community Filters",
          description: [
            "Adds filters to the community section on profiles allowing you to sort by A-Z, Z-A, Newest and Oldest, also allows you to view groups in a row format or grid format."
          ],
          contributors: ["447170745", "3602693727"],
          type: "checkbox",
          default: !0
        },
        trustedConnectionsEnabledv3: {
          label: "Trusted Friends",
          description: [
            "This feature allows you to accept, request and remove trusted friends on the site by pressing the (...) on their profile, this will only work for eligible friends.",
            "Trusted Friends might not be available in some regions.",
            "**Note:** Roblox uses an algorithm that may prevent adding someone even if they meet these requirements. [Learn more here.](https://en.help.roblox.com/hc/en-us/articles/46158344285204)"
          ],
          type: "true",
          default: !1
          //isPermanent: true,
          //locked: 'Seemingly broke after a Roblox update. And Roblox is rolling out their own version of it.',
        },
        lastOnlineEnabled: {
          label: "Show Last Online / Last Seen",
          description: [
            "Shows when a user was last online / seen on their profile.",
            "Only works for friends."
          ],
          type: "checkbox",
          default: !0
        },
        friendsSinceEnabled: {
          label: "Friends Since",
          description: "This feature shows how long you have been friends with someone on their profile and in your friends list.",
          type: "checkbox",
          default: !0
        },
        groupRoleEnabled: {
          label: "Show Community Roles",
          description: "Shows a user's role in a community on their profile.",
          type: "checkbox",
          default: !0,
          locked: "Roblox released their own version of this.",
          isPermanent: !0
        },
        groupJoinedDateEnabled: {
          label: "Show Community Joined Date",
          description: "Shows when a user joined a community on their profile.",
          type: "checkbox",
          default: !0
        },
        showFriendedFromEnabled: {
          label: "Show Friended From",
          description: "This shows where you became friends with a user, e.g., in game, profile, etc.",
          type: "checkbox",
          default: !0
        },
        lastPlayedTogetherEnabled: {
          label: "Most Frequent Played Together",
          description: "Shows the experience you played the most with a friend on their profile.",
          type: "checkbox",
          default: !1
        },
        bulkUnfriendEnabled: {
          label: "Bulk Unfriend",
          description: "This allows you to unfriend people from your friends list in bulk",
          type: "checkbox",
          default: !0
        },
        unfriendDetectorEnabled: {
          label: "Unfriend Detector",
          experimental: "May cause issues",
          type: "checkbox",
          default: !1,
          contributors: ["390309731"],
          description: [
            "Tracks your friends list and alerts you with a popup if someone unfriends you, showing who unfriended you."
          ]
        },
        PrivateServerBulkEnabled: {
          label: "Private Server Bulk Removal",
          description: [
            "This will add a toggle to the private server inventory tab that allows you to easily set a bunch of private servers as inactive.",
            "This also works for setting inactive private servers as active"
          ],
          type: "checkbox",
          default: !0
        },
        idVerificationBadgeEnabled: {
          label: "ID Verification Badge",
          description: [
            "Shows if a user has verified their ID on their profile.",
            'This is added to the "more" tab of the profile.'
          ],
          type: "checkbox",
          default: !0,
          contributors: ["477516666", "447170745"]
        },
        ageVerificationBadgeEnabled: {
          label: "Age Checked Badge",
          description: [
            "Shows whether a user has completed Roblox age check on their profile.",
            'This is added to the "more" tab of the profile.'
          ],
          type: "checkbox",
          default: !0
        },
        statusBubbleEnabled: {
          label: "Status Bubble",
          description: [
            "This allows you to set a status bubble on your profile that anyone with RoValra can see.",
            "Also allows you to view other RoValra users' status bubbles.",
            "**This is saved on RoValras database so anyone with RoValra can view it. It being saved on RoValras database used to be a tier 1 Donator perk, we are working on a replacement perk.**"
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            statusBubbleHomePage: {
              label: "Status bubble for friends on home page, and other parts of the site where friends might show.",
              type: "checkbox",
              default: !0
            }
          }
        },
        donationbuttonEnable: {
          label: "Donation Button",
          description: [
            "This will add a donation button to a user's profile, allowing you to donate directly from their profile without needing to join a game."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["447170745", "8345351117"],
          locked: "Roblox made this impossible.",
          isPermanent: !0
        },
        categorizeWearingEnabled: {
          label: "Improved Currently Wearing",
          description: [
            "Separates the 'Currently Wearing' section on profiles into categories like Items, Emotes, Body Parts and Animations.",
            "Also improves the item cards making them look a bit better and adds total outfit price.",
            "This feature was heavily inspired by a [roseal](https://www.roseal.live/) feature."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            CategorizeBodyParts: {
              label: "Body Parts in their own category",
              description: "This puts Body Parts into their own category.",
              type: "checkbox",
              default: !0
            },
            CategorizeEmotes: {
              label: "Emotes in their own category",
              description: "This puts Emotes into their own category.",
              type: "checkbox",
              default: !0
            },
            CategorizeAnimations: {
              label: "Animations in their own category",
              description: "This puts Animations into their own category.",
              type: "checkbox",
              default: !0
            }
          }
        },
        userRapEnabled: {
          label: "User RAP/Value",
          description: [
            "This shows a user's total RAP/Value on their profile."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            HideSerial: {
              label: "Hide Serial Numbers",
              description: [
                "This hides serial numbers on limiteds unless you hover over them."
              ],
              type: "checkbox",
              default: !1
            }
          }
        },
        useroutfitsEnabled: {
          label: "User Outfits",
          description: [
            "This allows you to view a user's saved outfits on their profile."
          ],
          type: "checkbox",
          default: !0
        },
        RoValraBadgesEnable: {
          label: "RoValra Badges",
          description: [
            "Disabling this will hide any RoValra badges from profiles."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            robloxGroupFeaturesEnabled: {
              label: "Roblox Group Badges",
              description: [
                "Enables Badges for groups, like star creator program, Roblox Community feedback Program etc."
              ],
              type: "checkbox",
              default: !0
            }
          }
        },
        profileBackgroundGradientEnabled: {
          label: "Custom Profile Background Gradient",
          description: [
            "Shows a user's selected gradient on their profile."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            profileGradient: {
              label: "Profile Gradient",
              description: "Set your own gradient for your own profile",
              type: "gradient",
              avatarPreview: !0,
              donatorTier: 2,
              donatorReason: "Donator Tier 2 is required to set a custom profile gradient. This feature is purely cosmetic and rewards donors.",
              default: {
                enabled: !1,
                color1: "#667eea",
                color2: "#764ba2",
                angle: 135,
                fade: 100
              }
            },
            applyGradientToAvatarTile: {
              label: "Apply Gradient Background to Profile Thumbnails",
              description: [
                "This adds the Gradient Background to profile thumbnails across the site like on the home page"
              ],
              type: "checkbox",
              default: !0
            }
          }
        },
        bannedUserViewerEnabled: {
          label: "View Banned Users Profile",
          description: ["Allows you to view banned users' profiles."],
          type: "checkbox",
          default: !0,
          childSettings: {
            bannedUserDetectionFallbackEnabled: {
              label: "Use Robust Banned User Detection",
              description: [
                "This makes sure it never fails to identify when you're trying to view a banned user.",
                "Without this it would fail to show banned user profiles if you open their link directly"
              ],
              type: "checkbox",
              default: !1,
              requiredPermissions: ["webRequest"]
            }
          }
        },
        avatarBorderEnabled: {
          label: "Shows a user's Avatar Border",
          description: [
            "Shows a decorative border around avatars on friend tiles and profile pages.",
            "**Your selected border is saved to RoValra's database so other RoValra users can see it.**"
          ],
          type: "checkbox",
          default: !0,
          contributors: [48255812],
          childSettings: {
            avatarBorderChoice: {
              label: "Get all Avatar borders for free",
              description: [
                "Allows you to use any avatar border completely free of charge."
              ],
              type: "button",
              buttonText: "Open Border Store",
              event: "rovalra:openBorderStore",
              avatarPreview: !0,
              donatorTier: 3,
              donatorReason: "Donator Tier 3 gets all avatar borders for free.",
              default: "none"
            }
          }
        },
        profileFrameEnabled: {
          label: "Shows a user's Profile Frame",
          description: [
            "Draws a frame around the avatar display on profile pages.",
            "Frames are separate from avatar borders, they wrap the whole avatar thumbnail holder instead of the avatar tile.",
            "**Your selected frame is saved to RoValra's database so other RoValra users can see it.**"
          ],
          type: "checkbox",
          default: !0,
          contributors: [48255812],
          childSettings: {
            profileFrameChoice: {
              label: "Profile Frames",
              description: [
                "Pick a profile frame from the Frames tab of the RoValra store."
              ],
              type: "button",
              buttonText: "Open Frame Store",
              event: "rovalra:openFrameStore",
              default: "none"
            }
          }
        },
        improvedAvatarCard: {
          label: "Improved Avatar Card",
          description: [
            "Adds a gap around the profile avatar making it look a bit nicer and modern."
          ],
          type: "checkbox",
          default: !0
        },
        usernameColor: {
          label: "Username Color Preview",
          description: [
            "Changes the user's username color on their profile to the color Roblox would give them in in-game chats. Inspired by https://github.com/RyloRiz/rblx-name-color."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["3602693727"]
        },
        displayNameGradientEnabled: {
          label: "Gradient Display Name",
          description: [
            "Shows three-color gradient display names on profiles to all RoValra users.",
            "Donator Tier 3 is required to set your own gradient display name."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            displayNameGradient: {
              label: "Display Name Gradient",
              description: "Choose the three colors used on your display name gradient.",
              type: "gradient",
              colorCount: 3,
              donatorTier: 3,
              donatorReason: "Donator Tier 3 is required to customize your display name gradient.",
              default: {
                enabled: !1,
                color1: "#ff4ecd",
                color2: "#ffe66d",
                color3: "#4dd4ff",
                angle: 90,
                fade: 100
              }
            },
            displayNameGradientEffect: {
              label: "Display Name Effect",
              description: "Adds an optional shine, roll, or bloom effect to your gradient display name.",
              type: "select",
              options: [
                { value: "none", label: "None" },
                { value: "shine", label: "Shine" },
                {
                  value: "shine-bloom",
                  label: "Shine + Bloom"
                },
                {
                  value: "roll",
                  label: "Gradient Roll"
                },
                {
                  value: "roll-bloom",
                  label: "Gradient Roll + Bloom"
                },
                { value: "sparkles", label: "Bloom" },
                {
                  value: "blooming-bloom",
                  label: "Blooming Bloom"
                }
              ],
              default: "none",
              donatorTier: 3,
              donatorReason: "Donator Tier 3 is required to use display name effects."
            }
          }
        }
      }
    },
    Home: {
      title: "Home",
      settings: {
        AccurateContinueEnabled: {
          label: "Accurate Continue",
          description: [
            "This sorts the continue accurately based off when you last played the game."
          ],
          type: "checkbox",
          default: !1,
          childSettings: {
            accurateContinueAutoRefreshEnabled: {
              label: "Auto Refresh Continue",
              description: [
                "Updates the Continue row after a game launches, without reloading the page."
              ],
              type: "checkbox",
              default: !1,
              // Not on by default cuz people are used to it not updating, so it randomly uipdating will get annoying.
              contributors: ["10646979010"]
              // hi im rav4
            }
          }
        },
        underratedGamesEnabled: {
          label: "Underrated Games",
          description: [
            "Adds RoValra community-picked underrated games to the Home page."
          ],
          type: "checkbox",
          default: !0
        },
        friendsSecondRowEnabled: {
          label: "Second Friends Row",
          description: [
            "Shows a second row of friends in the Home page friends carousel instead of only one row.",
            "Some extensions may overwrite this feature."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["2830488781"],
          locked: "Caused issues with other extensions.",
          isPermanent: !1
        },
        HideAddFriendsButton: {
          label: "Hide Add Friends Button",
          description: [
            "Hides the Add Friends button from the Home page and allows friend cards to use the freed space."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["476449201"]
        },
        friendLabelsEnabled: {
          label: "Friend Labels",
          description: [
            "Lets you assign a label to your friends on the Home page."
          ],
          type: "checkbox",
          default: !1,
          storageKey: "rovalra_friend_labels",
          contributors: ["4632962611"]
        },
        friendUsernamesEnabled: {
          label: "Show Usernames On Friend Cards",
          description: [
            "Shows a friend's @username below their display name on the Home page.",
            "In 'Servers My Friends Are In' it shows friends as 'DisplayName (@Username)', and also shows the username in a tooltip when hovering their avatar.",
            "Other extensions may overwrite this feature."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["760897332", "3598865306"]
        },
        homeLayoutEnabled: {
          label: "Home Layout",
          description: [
            "Lets you save a custom order for the rows on the Home page."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            homeLayoutButtonEnabled: {
              label: "Show Home Layout Button",
              description: [
                "Adds the RoValra Layout button to the Home page."
              ],
              type: "checkbox",
              default: !0
            }
          }
        },
        currentlyPlayingSubplaceEnabled: {
          label: "Currently Playing Subplace",
          description: [
            "Master toggle for showing the exact subplace and rootplace a user is playing.",
            "Turn this off to disable both the home subplace UI and the profile subplace UI."
          ],
          type: "checkbox",
          default: !1,
          experimental: "May cause issues",
          contributors: ["10646979010"],
          childSettings: {
            currentlyPlayingSubplaceHomeEnabled: {
              label: "Home Subplace",
              description: [
                "Shows the subplace section inside Roblox home/friends cards."
              ],
              type: "checkbox",
              default: !0
            },
            currentlyPlayingSubplaceProfileEnabled: {
              label: "Profile Page Subplace",
              description: [
                "Shows the subplace UI and details on profile pages."
              ],
              type: "checkbox",
              default: !0
            }
          }
        }
      }
    },
    Communities: {
      title: "Communities",
      settings: {
        groupGamesEnabled: {
          label: "Hidden Community Experiences",
          description: ["Shows a communities hidden experiences."],
          type: "checkbox",
          default: !0,
          contributors: ["8345351117", "447170745"]
        },
        pendingRobuxEnabled: {
          label: "Unpending Robux",
          description: [
            "Shows an estimate of how many pending Robux will stop pending within 24 hours."
          ],
          experimental: "May be inaccurate. And will take ages depending on the amount of sales",
          type: "checkbox",
          default: !1
        },
        antibotsEnabled: {
          label: "Anti-Bot Members",
          description: [
            "This adds a button that will allow you to scan all members in a community for bots.",
            "If there is any bots it will allow you to quickly ban or kick them.",
            "This calculates bots by similar avatars and display names, so it may not be 100% accurate."
          ],
          experimental: "Takes ages since Roblox has heavy rate limits.",
          type: "checkbox",
          default: !0,
          locked: "This broke in a UI update and wasn't very effective because of rate limits.",
          isPermanent: !1
        },
        QuickActionsEnabled: {
          label: "Quick Actions",
          description: [
            "This adds a quick action button allowing you to quickly ban or kick a bunch of users at once."
          ],
          type: "checkbox",
          default: !0,
          locked: "This broke in a UI update and wasn't very effective because of rate limits.",
          isPermanent: !1
        },
        draggableGroupsEnabled: {
          label: "Draggable Communities",
          description: [
            "Hold and drag your communities to reorder them however you want.",
            "Your custom order will be saved and persist across page refreshes.",
            "Just hold down on a community for a moment and drag it up or down."
          ],
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_groups_order",
          contributors: ["7982684834", "447170745"]
        },
        bulkLeaveGroupsEnabled: {
          label: "Bulk Leave Communities",
          description: ["This allows you to leave communities in bulk."],
          type: "checkbox",
          default: !0,
          contributors: [
            "447170745",
            "9502859424",
            "2615068449",
            "422540285"
          ]
        },
        groupPlaceVisitsEnabled: {
          label: "Total Community Place Visits",
          description: [
            "Shows the total number of visits across all of a community's experiences in the insights section."
          ],
          type: "checkbox",
          default: !0
        },
        groupCreateDateEnabled: {
          label: "Community Creation Date",
          description: [
            "Shows when a community was created in its header."
          ],
          type: "checkbox",
          default: !0
        },
        groupPendingFundsEnabled: {
          label: "Pending Community Funds",
          description: [
            "Shows a community's pending Robux in the funds section of its info dialog.",
            "If funds are showing publicly."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["587159802"]
        }
      }
    },
    Avatar: {
      title: "Avatar",
      settings: {
        forceR6Enabled: {
          label: "Remove R6 Warning",
          description: ["Removes the R6 warning when switching to R6."],
          type: "checkbox",
          default: !0
        },
        multiEquipEnabled: {
          label: "Multi-Equip",
          description: [
            "Allows you to equip multiple items like accessories seamlessly without having to use the advanced tab."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["447170745", "126448532"]
        },
        stickyAvatarEnabled: {
          label: "Sticky Avatar Preview",
          description: "This forces the avatar preview to always be in view on the avatar editor.",
          type: "checkbox",
          default: !0,
          contributors: ["587159802"]
        },
        avatarFiltersEnabled: {
          label: "Avatar Filters",
          description: [
            "Adds filters to the avatar page, allowing you to filter by effect items, limited, offsale / onsale and more."
          ],
          type: "checkbox",
          default: !0
        },
        searchbarEnabled: {
          label: "Adds a Searchbar to the Avatar Page",
          description: [
            "Allowing you to quickly search for items in the avatar editor."
          ],
          type: "checkbox",
          default: !0
        },
        bodyColorsEnabled: {
          label: "Custom Body Colors",
          description: [
            "Adds a custom color to the body colors in the avatar editor, so you are not limited to Roblox's preset palette.",
            "Colors you pick are saved next to the presets so you can reuse them. Right click a saved color to remove it."
          ],
          type: "checkbox",
          default: !0,
          storageKey: ["rovalra_body_color_presets"],
          contributors: ["4489102289"]
        },
        avatarRotatorEnabled: {
          label: "Avatar Rotator",
          description: [
            "Adds an avatar Rotator allowing you to Rotate between different avatars on a set interval.",
            "Allowing you to have a random avatar equipped every time you join an experience or respawn."
          ],
          type: "checkbox",
          default: !0,
          storageKey: [
            "rovalra_avatar_rotator_enabled",
            "rovalra_avatar_rotator_ids",
            "rovalra_avatar_rotator_interval"
          ]
        }
      }
    },
    transactions: {
      title: "Transactions",
      settings: {
        robuxFiatEstimatesEnabled: {
          label: "Robux Fiat Estimates",
          description: [
            "Shows a money estimate beside Robux values on the transactions page, group revenue pages, and related Robux UI.",
            "You can choose both the display currency and whether the estimate uses Roblox purchase pricing or the current DevEx cash-out rate."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["193520242", "447170745"],
          experimental: "Sometimes shows the wrong amount. And it might causes some issues on the site.",
          childSettings: {
            robuxFiatDisplayCurrency: {
              label: "Display Currency",
              description: [
                "Select which currency RoValra should convert Robux estimates into."
              ],
              type: "select",
              options: TRANSACTION_FIAT_CURRENCY_OPTIONS,
              default: "USD"
            },
            robuxFiatRateMode: {
              label: "Valuation Mode",
              description: [
                "Normal Purchase Rate uses Roblox purchase pricing as the estimate source.",
                "DevEx Cash-Out Rate uses the current Roblox DevEx cash-out rate of $0.0038 per Earned Robux before converting to your selected currency."
              ],
              type: "select",
              options: TRANSACTION_FIAT_RATE_OPTIONS,
              default: "normal"
            },
            robuxFiatEstimateGradient: {
              label: "Estimate Text Gradient",
              description: [
                "Customize the gradient used for the fiat estimate text."
              ],
              type: "gradient",
              default: ROBUX_FIAT_ESTIMATE_DEFAULT_GRADIENT
            },
            robuxFiatEstimateBold: {
              label: "Bold Estimate Text",
              description: ["Render the fiat estimate text in bold."],
              type: "checkbox",
              default: !1
            },
            robuxFiatEstimateItalic: {
              label: "Italic Estimate Text",
              description: [
                "Render the fiat estimate text in italic."
              ],
              type: "checkbox",
              default: !1
            }
          }
        },
        totalspentEnabled: {
          label: "Total Spent",
          description: [
            "This calculates the total amount of Robux and money you have spent on your account based on your transaction history."
          ],
          type: "checkbox",
          default: !0
        },
        spentPerGameEnabled: {
          label: "Spent Per Experience",
          description: [
            "Shows how much Robux you have spent on each experience on the transactions page."
          ],
          type: "checkbox",
          default: !0
        },
        spentPerCreatorEnabled: {
          label: "Spent Per Creator",
          description: [
            "Shows how much Robux you have spent on each user and group on the transactions page."
          ],
          type: "checkbox",
          default: !0
        },
        totalearnedEnabled: {
          label: "Total Earned",
          description: [
            "This calculates the amount of Robux you have earned throughout the years via things like gamepasses, item sales, etc."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["546872490", "447170745"]
        },
        pendingrobuxtrans: {
          label: "Unpending Robux Transactions",
          description: [
            "This estimates how many Robux will stop pending in 24 hours."
          ],
          experimental: "May be inaccurate. And will take ages depending on the amount of sales",
          type: "checkbox",
          default: !1,
          contributors: ["546872490", "447170745"]
        }
      }
    },
    Trading: {
      title: "Trading",
      settings: {
        tradeValuesEnabled: {
          label: "Trade Values",
          description: [
            "This shows a bunch of useful information when trading, stuff like:",
            "Rolimons Values, Trade differences in values and rap, item demand, item trend and more."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            tradeShowItemValues: {
              label: "Show Item Values",
              description: "Display Rolimons item values on individual trade item cards",
              type: "checkbox",
              default: !0
            },
            tradeShowProjectedIndicator: {
              label: "Show Projected Item Indicator",
              description: "Display warning icon for projected items",
              type: "checkbox",
              default: !0
            },
            tradeShowRareIndicator: {
              label: "Show Rare Item Indicator",
              description: "Display rare item indicator icon",
              type: "checkbox",
              default: !0
            },
            tradeShowItemInfo: {
              label: "Show Item Info / Trend / Demand",
              description: "Display item information tooltip with trend, demand and risk data",
              type: "checkbox",
              default: !0
            },
            tradeShowTotalValue: {
              label: "Show Total Trade Value",
              description: "Display total value summary line in trade offers",
              type: "checkbox",
              default: !0
            },
            tradeShowTotalDemand: {
              label: "Show Average Demand",
              description: "Display average demand summary line in trade offers",
              type: "checkbox",
              default: !0
            },
            tradeShowDiffPills: {
              label: "Show Value / RAP Difference Pills",
              description: "Display the value and RAP difference comparison pills at the bottom of the trade window",
              type: "checkbox",
              default: !0
            }
          }
        },
        tradePreviewEnabled: {
          label: "Trade Preview",
          description: [
            "Allows you to preview the value differences of a trade before opening it up.",
            `Also changes the trade timestamp to a more readable format and adds an "Open in Rolimons" link beside a user's username.`
          ],
          type: "checkbox",
          default: !0
        },
        tradeFilterEnabled: {
          label: "Trade Filter",
          description: "Adds a search bar to the trade page. Allowing you to search for trades containing specific items.",
          type: "checkbox",
          default: !0
        },
        tradeSearchEnabled: {
          label: "Trade Search",
          description: "Allows you to search for items in the create trade pages to quickly find them.",
          type: "checkbox",
          default: !0
        },
        confirmTradeEnabled: {
          label: "Trade Protection",
          description: "This adds a small preview of the trade you're making in the accept / decline confirmation pop-up.",
          type: "checkbox",
          default: !0
        },
        tradeProofEnabled: {
          label: "Proof Trades",
          description: "This allows you to quickly copy the rolimons proof format for any trade.",
          type: "checkbox",
          default: !1,
          experimental: "This may be inaccurate and may in some cases cause issues resulting in an inaccurate proof. Please verify it's correct before using it."
        },
        tradeRiskEnabled: {
          label: "Show Item Risk",
          description: "Shows the calculated risk of an item based on its trading history on item pages and trade pages.",
          type: "checkbox",
          default: !1,
          experimental: "May be inaccurate. It isn't recommended to rely on this completely."
        },
        blockUserEnabled: {
          label: "Block User",
          description: "Allows you to block users on the trade page, preventing them from sending you trade offers.",
          type: "checkbox",
          default: !1,
          contributors: ["1960518316"]
        }
      }
    },
    Plus: {
      title: "Roblox Plus",
      settings: {
        reducePlusAds: {
          label: "Less Roblox Plus",
          description: [
            "Makes Roblox Plus advertising more subtle.",
            "Not recommended if you have an active Roblox Plus subscription."
          ],
          type: "checkbox",
          default: !1,
          childSettings: {
            removeAllPlusAdds: {
              label: "Remove all Roblox Plus advertising.",
              type: "checkbox",
              default: !1
            }
          },
          contributors: ["1564574922"]
        },
        PlusPrivateServerTooltipEnabled: {
          label: "Roblox Plus Free Server Tooltip",
          description: [
            "Adds a tooltip showing the original cost of a private server if it is free due to Roblox Plus."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["447170745", "546872490"]
        },
        FreeRobloxPlusThemesEnabledv3: {
          label: "Free Roblox Plus Themes",
          description: [
            "Allows you to use Roblox Plus Themes on the site without Roblox Plus"
          ],
          type: "checkbox",
          default: !0,
          contributors: ["447170745", "4866259395", "650766686"],
          dependedBy: ["displayAppThemeOwnProfile"]
        },
        currencyTransferEnabled: {
          label: "Send Robux",
          description: [
            "This allows Roblox Plus subscribers to start a currency transfer by pressing the (...) on anyone's profile."
          ],
          type: "checkbox",
          default: !0,
          locked: "Roblox released their own version of this feature",
          isPermanent: !0,
          hidden: !0
        },
        sendRobuxEnabled: {
          label: "Send Robux",
          description: [
            "This allows Roblox Plus subscribers to start a transfer by pressing the (...) on anyone's profile, but now directly on the website!",
            'You can also use the "Send" button on the [Buy Robux](https://www.roblox.com/upgrades/robux) page.',
            "If you have an account under 18 you may need to accept Robux transfers in the notifications tab."
          ],
          childSettings: {
            keepRobuxAppButtonEnabled: {
              label: "Keep The Open In App button",
              description: [
                "Keeps the profile item that opens the app to send Robux."
              ],
              type: "checkbox",
              default: !1
            }
          },
          contributors: ["650766686"],
          type: "checkbox",
          default: !0
        },
        plusStatsEnabled: {
          label: "Show Plus Stats",
          description: "Shows Roblox Plus Stats on the [Plus](https://www.roblox.com/plus) page even if you aren't subscribed.",
          type: "checkbox",
          default: !0,
          contributors: ["650766686"]
        },
        plusTransferLimitsEnabled: {
          label: "Show Plus Transfer Limits",
          description: "Shows how much Robux you have left before the daily and monthly Roblox Plus transfer limits on the [Plus](https://www.roblox.com/plus) page.",
          type: "checkbox",
          default: !0
        }
      }
    },
    Navigation: {
      title: "Navigation",
      settings: {
        privacyTogglesEnabled: {
          label: "Privacy Toggles in Navigation",
          description: [
            "This setting adds a <icon filled>lock-closed</icon> button to the top navigation bar.",
            "This allows you to quickly manage privacy settings."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["650766686"],
          exclusiveWith: ["qolTogglesEnabled"],
          childSettings: {
            // Toggles to be in the menu
            privacyTogglesDropdownOnlineStatusEnabled: {
              label: "Online Status Toggle",
              description: [
                "Quickly manage your online status."
              ],
              type: "checkbox",
              default: !0
            },
            privacyTogglesDropdownJoinStatusEnabled: {
              label: "Experience Status Toggle",
              description: [
                "Quickly manage who can join you in experiences."
              ],
              type: "checkbox",
              default: !0
            },
            privacyTogglesDropdownPrivateServerPrivacyEnabled: {
              label: "Private Server Privacy Toggle",
              description: [
                "Quickly manage who can invite you to private servers."
              ],
              type: "checkbox",
              default: !0
            },
            privacyTogglesDropdownInventoryPrivacyEnabled: {
              label: "Inventory Privacy Toggle",
              description: [
                "Quickly manage who can view your inventory."
              ],
              type: "checkbox",
              default: !0
            }
          }
        },
        qolTogglesEnabled: {
          label: "Adds quality of life toggles to the navigation bar",
          description: "Allowing you to quickly change your online status, experience status, private server privacy, and inventory visibility without going into settings.",
          type: "checkbox",
          default: !1,
          contributors: ["447170745", "8345351117"],
          exclusiveWith: ["privacyTogglesEnabled"],
          isPermanent: !0,
          locked: "Replaced by Privacy Toggles in Navigation",
          deprecated: "Replaced by Privacy Toggles in Navigation."
        },
        sidebarCollapseEnabled: {
          label: "Collapsible Sidebar",
          description: ["Adds a button to collapse the Roblox sidebar."],
          type: "checkbox",
          default: !0,
          contributors: ["447170745", "2963377564"],
          storageKey: "rovalraSidebarCollapsed",
          childSettings: {
            sidebarExpandOnHover: {
              label: "Expand on Hover",
              description: [
                "Temporarily expands the collapsed sidebar while hovering over it."
              ],
              type: "checkbox",
              default: !1,
              contributors: ["4632962611"]
            }
          }
        },
        sidebarLayoutEnabled: {
          label: "Sidebar Layout",
          description: [
            "Lets you reorder and hide buttons in the Roblox sidebar."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["2963377564"],
          storageKey: [
            "rovalra_sidebar_layout_order",
            "rovalra_sidebar_layout_hidden"
          ]
        },
        voiceBanIndicatorEnabled: {
          label: "Voice Ban Indicator",
          description: [
            "Shows a voice status icon in the top bar while your Roblox voice chat is suspended."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["4632962611"]
        },
        topbarLayoutEnabled: {
          label: "Topbar Layout",
          description: [
            "Lets you reorder and hide buttons in the Roblox topbar."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["476449201"],
          storageKey: [
            "rovalra_topbar_layout_order",
            "rovalra_topbar_layout_hidden"
          ]
        },
        moreRobuxDigitsEnabled: {
          label: "More Robux Digits",
          description: [
            "Shows additional digits for abbreviated Robux balances such as 1M+ in the navigation bar."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            moreRobuxDigits: {
              label: "Digits to Show",
              description: [
                "Choose how many digits to show after the decimal point in abbreviated Robux balances."
              ],
              type: "select",
              options: [
                { label: "1 digit", value: "1" },
                { label: "2 digits", value: "2" },
                { label: "All digits", value: "all" }
              ],
              default: "1"
            }
          }
        },
        customRobloxBannerEnabled: {
          label: "Roblox Logo Customization",
          description: [
            "Replaces the Roblox banner in the top-left navigation bar with an image loaded from a URL you provide.",
            "Also supports GIFs!",
            "Recommended image: square PNG or WebP with transparency, 256x256 pixels.",
            'You can use this link "https://www.roblox.com/images/roblox_logo.png" to get back the old Roblox Logo!'
          ],
          type: "checkbox",
          default: !1,
          contributors: ["476449201"],
          storageKey: [
            "customRobloxBannerImageUrl",
            "customRobloxBannerImage",
            "customRobloxBannerPositionX",
            "customRobloxBannerPositionY",
            "customRobloxBannerZoom"
          ],
          childSettings: {
            customRobloxBannerImageUrl: {
              label: "Custom Roblox Banner URL",
              description: [
                "Enter a direct image URL to use as your Roblox banner."
              ],
              type: "input",
              inputType: "url",
              inputWidth: "280px",
              placeholder: "https://example.com/banner.png",
              trim: !0,
              validateHttpUrl: !0,
              imageUrlPreview: !0,
              default: null
            },
            customRobloxBannerFitMode: {
              label: "Display Mode",
              description: [
                "Contain keeps the whole image visible.",
                "Cover fills the banner area while preserving aspect ratio.",
                "Stretch fills the full default Roblox banner area and may distort the image."
              ],
              type: "select",
              options: [
                { label: "Contain", value: "contain" },
                { label: "Cover", value: "cover" },
                { label: "Stretch", value: "stretch" }
              ],
              default: "contain"
            },
            customRobloxBannerPositionControls: {
              label: "Image Position",
              description: [
                "Moves the image inside the banner area. This is most useful in Cover mode."
              ],
              type: "buttonGroup",
              buttons: [
                {
                  text: "\u2191",
                  event: "rovalra:customRobloxBannerMoveUp"
                },
                {
                  text: "\u2193",
                  event: "rovalra:customRobloxBannerMoveDown"
                },
                {
                  text: "\u2190",
                  event: "rovalra:customRobloxBannerMoveLeft"
                },
                {
                  text: "\u2192",
                  event: "rovalra:customRobloxBannerMoveRight"
                },
                {
                  text: "Center",
                  event: "rovalra:customRobloxBannerCenter"
                },
                {
                  text: "Zoom In",
                  event: "rovalra:customRobloxBannerZoomIn"
                },
                {
                  text: "Zoom Out",
                  event: "rovalra:customRobloxBannerZoomOut"
                }
              ]
            },
            customRobloxBannerPositionX: {
              label: "Image Position X",
              description: "Horizontal image position from left to right. 50 is centered.",
              type: "number",
              min: 0,
              max: 100,
              step: 1,
              default: 50,
              hidden: !0
            },
            customRobloxBannerPositionY: {
              label: "Image Position Y",
              description: "Vertical image position from top to bottom. 50 is centered.",
              type: "number",
              min: 0,
              max: 100,
              step: 1,
              default: 50,
              hidden: !0
            },
            customRobloxBannerZoom: {
              label: "Image Zoom",
              description: "Image zoom percentage. 100 is the default size.",
              type: "number",
              min: 25,
              max: 300,
              step: 10,
              default: 100,
              hidden: !0
            }
          }
        },
        ageKidsThemeEnabled: {
          label: "Age Theme",
          description: [
            "Lets you choose which Roblox age theme is used across the site.",
            "Overrides other age-theme settings."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["447170745", "650766686"],
          childSettings: {
            ageThemeSelection: {
              label: "Theme",
              description: "Choose which Roblox age theme class should be applied.",
              type: "select",
              options: [
                { label: "Normal Roblox", value: "normal" },
                { label: "Roblox Kids", value: "kids" },
                { label: "Roblox Select", value: "select" },
                {
                  label: "Roblox Leaked Select (Start Mode)",
                  value: "startmode"
                }
              ],
              default: "normal"
            },
            ageThemeNavbarEnabled: {
              label: "Show Age Theme in the navigation bar",
              description: "Adds a navigation bar button for switching the age theme live.",
              type: "checkbox",
              default: !1
            },
            ageThemeTextMatch: {
              label: "Match Age Badge",
              description: [
                "Matches the age badge text to the theme you listed.",
                "(Note: this is overridden by Custom Age Theme Badge Text.",
                "This also means that this will be **automatically turned off** if",
                "the Custom Age Theme Badge Text setting is active.)"
              ],
              type: "checkbox",
              default: !0,
              exclusiveWith: ["ageKidsTextEnabled"],
              contributors: ["650766686"]
            }
          }
        },
        ageKidsTextEnabled: {
          label: "Custom Age Theme Badge Text",
          description: [
            'Change the "SELECT" or "KIDS" text in the badge by the Roblox logo.',
            "You can even use this if you're not in those age groups!",
            "If you want you can also choose to hide the badge."
          ],
          type: "checkbox",
          default: !1,
          exclusiveWith: ["ageThemeTextMatch"],
          contributors: ["650766686", "1564574922"],
          childSettings: {
            ageKidsTextInput: {
              label: "Custom Badge Text",
              description: [
                "The text you would like to display in the badge.",
                "Maximum 30 characters.",
                "This will be overridden by the Hide The Badge setting"
              ],
              type: "input",
              default: null,
              contributors: ["10646979010", "1564574922"]
            },
            ageKidsTextPushNavbarEnabled: {
              label: "Show Full Badge Text",
              description: [
                "Expands the badge to show all of your custom text.",
                "Moves the navigation links to the right when more room is needed."
              ],
              type: "checkbox",
              default: !1,
              contributors: ["10646979010"]
            },
            ageKidsTextHiddenEnabled: {
              label: "Hide The Badge",
              description: "Hide the badge text describing your age group.",
              type: "checkbox",
              default: !1
            }
          }
        },
        hideRoValraSettingsNavbarDropdown: {
          label: "Hide RoValra Settings from the navigation bar dropdown",
          description: "Removes the RoValra Settings shortcut from the Roblox settings dropdown in the top navigation bar.",
          type: "checkbox",
          default: !1
        },
        betaProgramsEnabled: {
          label: "Adds a beta programs toggle to the navigation bar",
          description: "This allows you to toggle beta programs you're enrolled in easily.",
          type: "checkbox",
          default: !1,
          childSettings: {
            previousBetaProgramsEnabled: {
              label: "Show Previous Beta Programs",
              description: "Stores beta programs you have seen before and shows programs that are no longer returned by Roblox as disabled entries in the dropdown.",
              type: "checkbox",
              default: !0,
              storageKey: "rovalra_previous_beta_programs"
            }
          }
        },
        transactionsSidebarLinkEnabled: {
          label: "My Transactions sidebar link",
          description: "Adds a My Transactions link below Communities in the Roblox sidebar.",
          type: "checkbox",
          default: !1,
          contributors: ["193520242", "447170745"]
        },
        quickSearchEnabled: {
          label: "Quick Search",
          description: "This adds an autocomplete to the search dropdown for users, friends and experiences",
          type: "checkbox",
          default: !0,
          childSettings: {
            userSearchEnabled: {
              label: "Quick User Search",
              description: "Shows a user that matched what you searched in the search dropdown.",
              type: "checkbox",
              default: !0
            },
            gameSearchEnabled: {
              label: "Quick Experience Search",
              description: "Shows an experience that has the best match to what you searched in the search dropdown.",
              type: "checkbox",
              default: !0
            },
            friendSearchEnabled: {
              label: "Quick Friend Search",
              description: "Shows a list of friends that has the best match to what you searched in the search dropdown.",
              type: "checkbox",
              default: !0
            }
          }
        },
        searchHistoryEnabled: {
          label: "Search History",
          description: "This tracks what you search on Roblox and allows you to view it.",
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_search_history"
        },
        GroupFundsEnabled: {
          label: "Show Community Funds",
          description: "Shows the funds of a specific community when pressing your Robux amount in the navigation bar.",
          type: "checkbox",
          default: !1,
          storageKey: "rovalra-group-funds-data",
          childSettings: {
            GroupFundsNavbarTotalEnabled: {
              label: "Combine Community Funds with Robux Balance",
              description: "Combines your Robux balance with your configured community funds in the navbar. Click the balance to see your Robux and each community separately.",
              type: "checkbox",
              default: !1,
              contributors: ["278039610"]
            },
            GroupFundsIds: {
              label: "Community IDs",
              description: "The IDs of the communities to show funds for.",
              type: "list",
              default: [""],
              addButtonText: "Add Another Community",
              placeholder: "Enter Community ID..."
            }
          }
        }
      }
    },
    Miscellaneous: {
      title: "Miscellaneous",
      settings: {
        disableThumbnailBackground: {
          label: "Disable Thumbnail Backgrounds",
          description: [
            "This prevents profile backgrounds from showing in avatar headshots and other places."
          ],
          type: "checkbox",
          default: !1
        },
        disableThumbnailProfileFrame: {
          label: "Disable Roblox Thumbnail Profile Frames",
          description: [
            "This prevents Roblox profile frames from showing around avatar headshots."
          ],
          type: "checkbox",
          default: !1
        },
        CustomThemeBackgroundEnabled: {
          label: "Customizable Background Image",
          description: "Allows you to add a custom background image to the Roblox website.",
          type: "checkbox",
          default: !1,
          contributors: ["476449201"],
          childSettings: {
            customBackgroundImage: {
              label: "Background Image Configuration",
              type: "backgroundImage",
              default: DEFAULT_BACKGROUND_IMAGE,
              hidden: !0
            },
            openCustomThemeBackground: {
              label: "Customize Image Settings",
              description: "Adjust the image's opacity, blur, position, size, and more.",
              type: "button",
              buttonText: "Edit",
              event: "rovalra:openCustomThemeBackground"
            }
          }
        },
        ExplorerEnabled: {
          label: "Explorer",
          description: [
            "Adds an Explorer button on item pages and your experiences."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["9502859424"]
        },
        Customfont: {
          label: "Custom font",
          description: [
            "This allows you to set a custom font for the Roblox website."
          ],
          type: "checkbox",
          default: !1,
          contributors: [48255812],
          childSettings: {
            Customfontlink: {
              label: "Google Fonts link",
              description: [
                "You can find Fonts at https://fonts.google.com/",
                'The link should look like "https://fonts.google.com/specimen/Comic+Neue"'
              ],
              type: "input",
              default: null,
              placeholder: "Enter Font Link here..."
            }
          }
        },
        ServerdataEnabled: {
          label: "Send Server IDs and Place IDs to RoValra's API",
          description: [
            "This feature sends server IDs and place IDs to RoValra's API when you browse the site.",
            "This data is used for the server uptime and the Total Servers features.",
            "Leaving this feature on will help improve the Server Uptime and Total Servers features.",
            "**No personal data is sent, not even user ID or username\u2014only the server IDs and the place ID.**",
            "**No data that could link the server IDs or place IDs to you is sent or logged.**"
          ],
          type: "checkbox",
          default: !0
        },
        disableChannelTracking: {
          label: "Disable Channel Tracking",
          description: [
            "Stops RoValra from sending your channel to the RoValra backends. We use this to improve RoValra, and the data is public. We have safety measures in place to prevent private channels from ever being stored.",
            "After this feature has been disabled any data stored related to channels from you will be removed."
          ],
          type: "checkbox",
          default: !1
        },
        loginBannerEnabled: {
          label: "Login Banner",
          description: [
            "Adds a banner to the login page to verify you're on the official Roblox website.",
            "This helps prevent phishing by ensuring you know when you're on the real site."
          ],
          type: "checkbox",
          default: !1
        },
        legacyThemeSwitcherEnabled: {
          label: "Legacy Theme Switcher",
          description: [
            "This adds a dropdown in the Roblox settings which replicates how the old theme switcher worked",
            "This means you won't have to switch to your preferred theme when logging in on a new browser."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["2615068449"]
        },
        modernIconsEnabled: {
          label: "Modern Icons",
          description: [
            "Replaces default Roblox playing and like icons on the site, with the new modern icons used by the client."
          ],
          type: "checkbox",
          default: !0
        },
        cssfixesEnabled: {
          label: "Site Fixes",
          description: [
            "This fixes various site issues or just poor design choices by Roblox."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            giantInvisibleLink: {
              label: "Fix the Continue and Favorites buttons' clickable area",
              description: [
                "Fixes the Continue and Favorites buttons on the home page being wider than shown visually."
              ],
              type: "checkbox",
              default: !0
            },
            gameTitleIssueEnable: {
              label: "Fix the experience title issues",
              description: "Fixes the top and bottom of experience titles on profiles getting cut off.",
              type: "checkbox",
              default: !0
            },
            FixCartRemoveButton: {
              label: "Fix Cart Remove Button Size",
              description: "Fixes the size of the remove item from cart button being super small in the shopping cart.",
              type: "checkbox",
              default: !0,
              contributors: ["4866259395", "447170745"]
            },
            profileUsernameSpacingFixEnabled: {
              label: "Keep profile usernames spaced from the top",
              description: "Prevents your username from being moved up to a place where it's harder to read because of extensions adding features.",
              type: "checkbox",
              default: !0
            }
          }
        },
        eastereggslinksEnabled: {
          label: "Easter Egg Links",
          description: [
            "Adds Easter eggs to random links that otherwise wouldn't do anything.",
            "Some easter eggs redirect offsite."
          ],
          type: "checkbox",
          default: !0
        },
        useOldRovalraLogo: {
          label: "Use Old RoValra Logo",
          description: "Brings back the old RoValra logo across the extension.",
          type: "checkbox",
          default: !1
        },
        MemoryleakFixEnabled: {
          label: "Fix Roblox Memory Leak",
          description: [
            "This attempts to fix the memory leak caused by the Roblox website when reloading a page or navigating the site.",
            "This fix will redirect most URL changes to 'about:blank' and then to the intended URL, which fixes the memory leak, but may cause a slight flicker when navigating and issues with the back and forward arrows.",
            "If you don't know what a memory leak is or you don't feel like Roblox is using too much memory, you can leave this off.",
            "**This feature isn't recommended anymore; it seems like Roblox has fixed the memory leak.**"
          ],
          type: "checkbox",
          default: !1,
          locked: "This issue has long since been fixed by Roblox, so the feature isn't needed anymore.",
          isPermanent: !0,
          requiredPermissions: ["webNavigation"]
        },
        firstAccountEnabled: {
          label: "First Account?",
          description: "This adds a section in Roblox's settings showing if Roblox considers your Roblox account the first Roblox account you created.",
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_first_account_cache",
          contributors: ["4866259395", "447170745"]
        },
        revertLogo: {
          label: "Change the app launch icon",
          description: [
            "This changes the icon that shows when you join an experience.",
            "Old icon is the icon it had before they changed it to the new app client icon.",
            "And of course, a custom icon can be any image you want."
          ],
          type: "checkbox",
          default: !1,
          childSettings: {
            customLogoData: {
              label: "Custom icon",
              description: [
                "Upload your custom image. Maximum file size is 1MB."
              ],
              type: "file",
              default: null,
              compressSettingName: "compressCustomLogo",
              storageKey: "customLogoData"
            },
            compressCustomLogo: {
              label: "Compress Custom Icon",
              description: [
                "Compresses the image to reduce storage space (max 512px, JPEG 80% quality for photos, PNG for transparent images).",
                "Disable this to keep full quality and transparency, but it may use more storage space.",
                "Uncompressed images must still be under 1MB."
              ],
              type: "checkbox",
              default: !0
            }
          }
        },
        settingChangeNote: {
          label: "Setting changes alerts",
          description: [
            "Shows you whenever certain settings were replaced or removed."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["1564574922"]
        },
        FunStuffEnabled: {
          label: "Fun Stuff tab",
          description: ["Shows the Fun Stuff tab in RoValra settings."],
          type: "checkbox",
          default: !1
        }
      }
    },
    AntiAccountTracking: {
      title: "Privacy",
      settings: {
        streamermode: {
          label: "Streamer Mode",
          description: [
            "This feature hides information that you most likely don't want to accidentally show on something like a live stream."
          ],
          type: "checkbox",
          default: !1,
          experimental: "This may cause some issues since it tricks Roblox into thinking your private info is something it isn't.",
          contributors: ["447170745", "48255812"],
          childSettings: {
            settingsPageInfo: {
              label: "Hide Private Information on the settings page",
              description: [
                "This visually replaces your Email, Phone Number, Sessions, and account location with 'RoValra Streamer Mode Enabled'.",
                "And completely hides your Age Group, previous usernames in settings and Birthday."
              ],
              type: "checkbox",
              default: !0
            },
            hideRobux: {
              label: "Hide Robux",
              description: [
                "Simply hides your Robux by changing it to 'Hidden'.",
                "This doesn't hide your Robux on purchase prompts."
              ],
              type: "checkbox",
              default: !1
            },
            hideRobuxRevealOnClick: {
              label: "Reveal Robux on click",
              description: [
                "Lets you click your hidden Robux to show the real amount again, together with its fiat estimate.",
                "Clicking it again hides your Robux, and it also hides itself again whenever you reload or leave the page."
              ],
              type: "checkbox",
              default: !1,
              condition: {
                parent: "hideRobux",
                value: !0,
                hide: !1
              }
            }
          }
        },
        bulkUnblockEnabled: {
          label: "Bulk Unblock",
          description: [
            "Allows you to select and unblock multiple blocked users at once.",
            "You will be asked to confirm before any users are unblocked."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["4632962611"],
          childSettings: {
            openBulkUnblockManager: {
              label: "Manage Blocked Users",
              description: [
                "View your blocked users and select multiple users to unblock."
              ],
              type: "button",
              buttonText: "Open Manager",
              event: "rovalra:openBulkUnblock"
            }
          }
        },
        spoofAsOffline: {
          label: "Spoof status as Offline",
          description: [
            "Makes you appear as offline to you and other people.",
            "This is useful if you want to appear offline while still allowing friends to join you in experiences, since Roblox's official offline status doesn't allow this.",
            "Joining an experience will overwrite this status.",
            "This may take a few minutes to actually change your status to offline after turning on the feature."
          ],
          type: "checkbox",
          default: !1,
          exclusiveWith: ["spoofAsStudio", "spoofAsOnline"],
          contributors: ["447170745", "109176680"]
        },
        spoofAsStudio: {
          label: "Spoof status as In Studio",
          description: [
            "Makes your online status appear as 'In Studio' to you and other users.",
            "Joining an experience will overwrite this status.",
            "The Spoofed Status will only show if RoValra is enabled and a Roblox page is open."
          ],
          type: "checkbox",
          default: !1,
          exclusiveWith: ["spoofAsOffline", "spoofAsOnline"],
          contributors: ["447170745", "109176680"]
        }
      }
    },
    FunStuff: {
      title: "Fun Stuff",
      settings: {
        iconElementUsageDescription: {
          label: "icon Element Usage",
          description: [
            "You can use the `<icon>` element to put icons in places",
            "To use an `<icon>` element simply do the following `<icon>tilt</icon>` <icon>tilt</icon>",
            "If you want the icon to be filled simply do the following `<icon filled>thumb-up</icon>` <icon filled>thumb-up</icon>",
            "To use RoValra icons, simply do the following: `<icon rovalra>contributor</icon>` <icon rovalra>icon</icon>.",
            "To use Google Material Icons, simply do the following: `<icon material>bookmark</icon>` <icon material>bookmark</icon>.",
            "You can also use the `size` property to change the size to a specific css length or even use presets like `x-small`, `small`, `medium`, `large`, `x-large`, and `xx-large`",
            "You can use the `<icon>` element in the Custom Age Theme Badge Text setting."
          ],
          contributors: ["650766686", "1564574922"]
        },
        bandurationsEnabled: {
          label: "All possible ban durations",
          description: [
            "**This doesn't include voice chat bans.**",
            "**Any text saying 'Note:' is a note added by Valra to explain stuff better.**",
            "- Banned for 1 Day",
            "- Banned for 3 Days",
            "- Banned for 7 Days",
            "- Banned for 14 Days",
            "- Account Deleted",
            "\u2022 Warning",
            "\u2022 Banned for 6 Months",
            "\u2022 Banned for 1 Year",
            "\u2022 Note: the things below aren't bans but instead tell you what will happen if you do it again. This doesn't always show when you get banned.",
            "\u2022 The things below are called 'Foreshadow bans'.",
            "\u2022 If you violate the Community Standards again, your account may be suspended in the future. ",
            "\u2022 If you violate the Community Standards again, your account may be suspended for at least 1 day.",
            "\u2022 If you violate the Community Standards again, your account may be suspended for at least 3 days.",
            "\u2022 If you violate the Community Standards again, your account may be suspended for at least 7 days.",
            "\u2022 If you violate the Community Standards again, your account may be permanently banned from Roblox.",
            "- Note: 2 days, 1 hour, 3 hours, 6 hours and 12 hours bans might not be in use.",
            "\u2022 Banned for 2 Days",
            "\u2022 Banned for 3 Hours",
            "\u2022 Banned for 6 Hours",
            "\u2022 Banned for 12 Hours",
            "\u2022 Banned for 1 Hour",
            "\u2022 Account Terminated",
            "\u2022 Banned for 60 Days"
          ],
          default: null
        },
        BanReasons: {
          label: "All possible ban reasons on Roblox, some ban reasons have been censored by Valra.",
          description: [
            "**All ban reasons are 100% confirmed**",
            "**Keep in mind these are ban reasons, which is basically categories each ban might fall into.**",
            "**Any text saying 'Note:' is a note added by Valra to explain stuff better.**",
            "- None (Note: Likely used when there isn't a ban reason and instead only a moderator note.)",
            "- Profanity",
            "- Harassment",
            "- Spam",
            "- Advertisement",
            "\u2022 Scamming",
            "\u2022 Adult Content",
            "\u2022 Inappropriate",
            "\u2022 Privacy",
            "\u2022 Unclassified Mild",
            "\u2022 BlockedContent",
            "\u2022 Minor Swearing",
            "\u2022 Distorted Audio",
            "\u2022 Loud Earbleeders",
            "\u2022 Players Screaming into Microphone",
            "\u2022 Swearing",
            "\u2022 P####graphic Sounds",
            "\u2022 Explicit S##ual References and Innuendo",
            "\u2022 Dr## and Alc###l References",
            "\u2022 Discriminatory or N##i Content",
            "\u2022 Dating Imagery",
            "\u2022 Discriminatory Content",
            "\u2022 Dr##s, Alc###l",
            "\u2022 DMCA",
            "\u2022 Explicit N####y/P##n",
            "\u2022 Gang Images",
            "\u2022 N###s",
            "\u2022 Personal Attack/Harassment/Bullying",
            "\u2022 Red Armbands (Not N###s) ",
            "\u2022 Suggestive/S##ualized Imagery",
            "\u2022 S####de/Self-####",
            "\u2022 Clickbait Ads",
            "\u2022 Inappropriate Content",
            "\u2022 Not Related to Roblox",
            "\u2022 Off-Site Links",
            "\u2022 Hidden Message Clothing",
            "\u2022 None of the Above",
            "\u2022 Account Theft",
            "\u2022 Asset Ownership",
            "\u2022 Billing",
            "\u2022 Compromised Account",
            "\u2022 Copyright/DMCA",
            "\u2022 Derogatory/Harassment",
            "\u2022 Depressive",
            "\u2022 Discriminatory",
            "\u2022 Exploiting",
            "\u2022 Text Filter / Profanity",
            "\u2022 Gr###ing",
            "\u2022 Illicit Substance",
            "\u2022 Malicious",
            "\u2022 Misleading",
            "\u2022 Dating",
            "\u2022 Phishing/Scam",
            "\u2022 Real Info",
            "\u2022 RMT (Note: Real money transaction)",
            "\u2022 S##ual/Adult Content",
            "\u2022 Shock",
            "\u2022 Threats",
            "\u2022 Real-Life Tragedy",
            "\u2022 Politics",
            "\u2022 Encouraging Dangerous Behavior",
            "\u2022 Other",
            "\u2022 Dating and Romantic Content",
            "\u2022 S##ual Content",
            "\u2022 Directing Users Off-Platform",
            "\u2022 Privacy: Asking for PII",
            "\u2022 Privacy: Giving PII",
            "\u2022 Impersonation",
            "\u2022 Extortion and Blackmail",
            "\u2022 Illegal and Regulated Content",
            "\u2022 Misusing Roblox Systems",
            "\u2022 Political Content",
            "\u2022 T###orism/Extremism",
            "\u2022 Child Endangerment",
            "\u2022 Real-Life Threats",
            "\u2022 Cheat and Exploits",
            "\u2022 Seeking S##ual Content",
            "\u2022 Disruptive Audio",
            "\u2022 Contests and Sweepstakes",
            "\u2022 Threats or Abuse of Roblox Employees or Affiliates",
            "\u2022 Roblox Economy",
            "\u2022 IRL Dangerous Activities",
            "\u2022 Intellectual Property Violation",
            "\u2022 Off Platform Speech and Behavior",
            "\u2022 Violent Content and Gore",
            "\u2022 Advertising",
            "\u2022 Chargeback",
            "\u2022 DMCA Early Legal Strike",
            "\u2022 DMCA Final Legal Strike",
            "\u2022 You created or used an account to avoid an enforcement action taken against another account determined from your account information, such as your account email, phone number, or other information (Note: This is not a ban reason; this is a moderator note)",
            "\u2022 Trademark Violation",
            "\u2022 Roblox does not permit using third-parties to buy, sell, or trade Robux, promotional codes that falsely appear to be from Roblox Corporation, or inappropriate use of the community payout system. (Note: This is not a ban reason; this is a moderator note)",
            "- Note: Fun fact\u2014the 'using third-parties to buy, sell, or trade Robux' moderator notes are called 'Virtual Casino' bans in the code."
          ],
          default: null
        },
        appealstuff: {
          label: "Appeals related stuff",
          description: [
            "**Appeal Outcomes & Decisions**",
            "- Appeal denied",
            "- We have reviewed your appeal. This activity is still in violation of Roblox Community Standards.",
            "- Appeal accepted",
            "- We have reviewed your appeal. This activity is not in violation of Roblox Community Standards. Any consequence related to this activity is reversed.",
            "- We have reviewed your appeal. This activity is still in violation of Roblox Community Standards. However, we\u2019ve updated the violation category.",
            "**Appeal Instructions & Information**",
            "- Appeal something not shown",
            "- Request Appeal",
            "- Additional info (optional)",
            "- You can appeal by {date}",
            `- View past violations and manage your appeals. All content and behavior must adhere to the {link}Roblox Community
Standards{linkEnd}.`,
            "- Reviews are based on {link}Roblox Community Standards{linkEnd}",
            "- Learn more about appeals {link}here{linkEnd}.",
            "**Error Messages & Support Fallbacks**",
            "- Appeals information not found",
            "- If you would like to appeal something not shown here please visit {link}Support{linkEnd}",
            "- You've reached the maximum number of appeals. You may no longer appeal this {assetType}."
          ],
          default: null
        },
        captcha: {
          label: "All the places where you can get a captcha on Roblox",
          description: [
            "Roblox, I'm still mad that you denied my captcha bypass just to fix it a few weeks later \u{1F621}\u{1F621}\u{1F621}\u{1F621}\u{1F621}",
            "- sign up",
            "- login",
            "- change password",
            "- redeeming a gift card",
            "- submitting a support ticket",
            "- buying an item (speculation, might have been removed)",
            "- posting on a group wall (likely gonna be the same for group forum posts)",
            "- joining a group",
            "- 'generic challenge'\u2014no idea what they mean by that.",
            "- following a user",
            "- uploading 'clothing asset'\u2014could also be the same for any asset, but I'm unsure.",
            "- posting a comment on an asset (comments on assets have been removed)"
          ],
          default: null
        }
      }
    },
    PublicDeveloper: {
      title: "Developer",
      settings: {
        EnableRobloxApiDocsv2: {
          label: "Roblox API docs",
          description: [
            "Adds OpenAPI documentation for Roblox and RoValra APIs on https://www.roblox.com/docs.",
            "This documents undocumented Roblox APIs, which can be really useful for Developers.",
            "All Roblox APIs were documented by [Cam](https://www.roblox.com/users/4866259395/profile)"
          ],
          type: "checkbox",
          default: !0,
          locked: "Temporarily disabled while the API Docs feature is being rebuilt.",
          isPermanent: !1,
          contributors: ["4866259395", "447170745"],
          childSettings: {
            apiDocsSidebarLinkEnabled: {
              label: "API Docs sidebar link",
              description: "Adds an API Docs link below Communities in the Roblox sidebar.",
              type: "checkbox",
              default: !1
            }
          }
        },
        viewIdEnabled: {
          label: "View Bundled IDs",
          description: "Allows you to view all bundles items and their IDs of any catalog item.",
          type: "checkbox",
          default: !1,
          requiredPermissions: ["contextMenus"],
          contributors: ["1564574922"]
        },
        copyIdEnabled: {
          label: "Allows you to quickly copy an ID of a thing you're right-clicking.",
          description: "This adds a Copy ID button directly to the right-click context menu, so you don't have to open the link and copy the ID from it.",
          type: "checkbox",
          default: !1,
          requiredPermissions: ["contextMenus"],
          contributors: ["447170745", "1564574922"]
        },
        copyUniverseIdEnabled: {
          label: "Allows you to quickly copy a universe id",
          description: "This adds a copy universe id button directly into the right click context menu.",
          type: "checkbox",
          default: !1,
          requiredPermissions: ["contextMenus"]
        },
        DownloadCreateEnabled: {
          label: "Adds a download button to create.roblox.com",
          description: "This feature allows you to download assets like meshes, images, audios, etc from the create page.",
          type: "checkbox",
          default: !0,
          contributors: ["447170745", "126448532"]
        }
      }
    },
    Developer: {
      title: "RoValra Developer",
      settings: {
        info: {
          label: ["RoValra Developer Settings"],
          description: [
            "These are features used mostly to develop RoValra. If you don't know what you're doing, don't touch them."
          ],
          type: "yay"
        },
        alwaysShowDeveloperSettings: {
          label: ["Always show RoValra developer settings tab"],
          description: [
            "This makes the RoValra developer settings tab always show, so you don't have to perform the Easter egg every time."
          ],
          type: "checkbox",
          default: !1
        },
        overwriteRemoteSettingLocks: {
          label: ["Override remotely disabled settings"],
          description: [
            "Allows RoValra features to remain enabled even when they're disabled by the remote settings service. This is for testing and may expose unstable features."
          ],
          type: "checkbox",
          default: !1
        },
        forceGuidelinesPopup: {
          label: "Force Guidelines Popup",
          description: [
            "Shows the RoValra Guidelines every time you try to use a feature that requires them, even after you previously agreed."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["10646979010"]
        },
        alwaysShowAccountStandingTab: {
          label: ["Always show Account Standing tab"],
          description: [
            "This will make the Account Standing tab show even when your account has no current or previous RoValra moderation action."
          ],
          type: "checkbox",
          default: !1
        },
        profileTestTabEnabled: {
          label: ["Profile test tab"],
          description: [
            'Adds a test tab containing the text "test" to profiles.'
          ],
          type: "checkbox",
          default: !1
        },
        EnablebannerTest: {
          label: ["Banner test"],
          description: ["This adds a test banner to experiences"],
          type: "checkbox",
          default: !1
        },
        impersonateRobloxStaffSetting: {
          label: ["Impersonate User Option On Profiles"],
          description: [
            "This enables the 'Impersonate User' option on people's profiles, used by Roblox internally.",
            "Pressing the 'Impersonate User' option does nothing other than produce an error unless you're authorized to use it."
          ],
          deprecated: "Roblox removed it with the new profile overhaul",
          locked: "This internal Roblox feature was removed during the profile page redesign.",
          isPermanent: !0,
          type: "checkbox",
          default: !1
        },
        EarlyAccessProgram: {
          label: ["Early Access Program Showcase"],
          description: [
            "This tricks Roblox into thinking you're in an early access program, making Roblox add the early access program UI to your settings.",
            "This setting won't allow you to join any early access programs you weren't invited to.",
            "This will also overwrite any early access programs you might already be in."
          ],
          type: "checkbox",
          default: !1
        },
        fakePreviousBetaProgramEnabled: {
          label: ["Fake Previous Beta Program"],
          description: [
            "Adds a fake previous beta program to the beta programs dropdown for testing.",
            "Requires previous beta programs to be enabled."
          ],
          type: "checkbox",
          default: !1
        },
        showUserAgeEnabled: {
          label: "Show Friend Age Range",
          description: "This shows the account age range of anyone on your friends list.",
          type: "checkbox",
          default: !1,
          locked: "This was made when Roblox decided it was a good idea to leak everyone's age range. It was only made to shed light on the issue, which has now been resolved.",
          isPermanent: !0
        },
        EnableVideoTest: {
          label: ["Video test"],
          description: [
            "This adds a video test for experience trailers not uploaded to YouTube at https://www.roblox.com/videotest.",
            "Since this feature is only supported on the client."
          ],
          type: "checkbox",
          default: !1
        },
        onboardingShown: {
          label: ["Show onboarding"],
          description: [
            "This will show RoValra's onboarding screen again when this setting is disabled."
          ],
          type: "checkbox",
          default: !1
        },
        simulateRoValraServerErrors: {
          label: ["Simulate RoValra Server Errors / downtime"],
          description: [
            "This will simulate RoValra Server errors / downtime, useful when testing how the extension handles stuff like that."
          ],
          type: "checkbox",
          default: !1
        },
        simulateRobloxJoinErrors: {
          label: ["Simulate Roblox Join Errors"],
          description: [
            "Simulates network errors for the Roblox Join API to test handling of critical join failures."
          ],
          type: "checkbox",
          default: !1,
          childSettings: {
            simulateRobloxJoinHttpErrors: {
              label: ["Simulate Roblox Join 500 Errors"],
              description: [
                "Simulates HTTP 500 errors for the Roblox Join API to test handling of internal server errors."
              ],
              type: "checkbox",
              default: !1
            }
          }
        },
        forceReviewPopup: {
          label: ["Force Review Popup"],
          description: [
            "When enabled, shows the review popup every time it's triggered, ignoring all requirements. For testing purposes."
          ],
          type: "checkbox",
          default: !1
        },
        forceRegionDonationPopup: {
          label: ["Force Region Donation Popup"],
          description: [
            "When enabled, shows the region selector donation popup every time it's triggered, ignoring donor and cadence requirements. For testing purposes."
          ],
          type: "checkbox",
          default: !1
        },
        forceFeatureStatusPrompt: {
          label: ["Force Feature Status Prompt"],
          description: [
            "When enabled, shows the feature status acknowledgement every time an off by default experimental, beta, or deprecated feature is enabled. For testing purposes."
          ],
          type: "checkbox",
          default: !1
        },
        rendererDeveloperToggles: {
          label: "3D renderer Developer toggles",
          type: "checkbox",
          default: !1
        },
        forceFallbackAuth: {
          label: "Force Fallback Authentication",
          description: [
            "Forces the use of the fallback verification system instead of OAuth.",
            "This auth is used in cases where OAuth doesn't work."
          ],
          type: "checkbox",
          default: !1
        },
        profile3DRenderBypassCheck: {
          label: "Bypass Graphics Check",
          description: [
            "Bypasses the compatibility check for the 3D Profile Renderer.",
            "Only enable this if the 3D renderer was disabled due to graphics issues but you want to try anyway."
          ],
          type: "checkbox",
          default: !1
        },
        disablePrivateGameRedirection: {
          label: "Disable Private Game Redirection",
          description: [
            "Disables the automatic redirection to the standard experience page when a public experience is detected in the private experience viewer."
          ],
          type: "checkbox",
          default: !1
        },
        localStorageUsage: {
          label: "Show Local Storage Usage",
          description: [
            "Displays the total storage used by RoValra in Chrome's local storage."
          ],
          type: "button",
          buttonText: "Calculate Storage",
          event: "rovalra:showLocalStorageUsage"
        },
        verboseDebug: {
          label: "Verbose Debugging",
          description: ["Displays extended debugging information."],
          type: "checkbox",
          default: !1,
          contributors: ["1564574922"],
          experimental: "This feature isn't yet widely used within RoValra."
        }
      }
    }
  };

  // src/content/core/debug.ts
  var verbose = !1;
  async function init() {
    verbose = (await chrome.storage.local.get({ verboseDebug: !1 })).verboseDebug;
  }
  __name(init, "init");
  init();
  var toFlush = "";
  function debugVerbose(fmt, ...args) {
    toFlush.length >= 500 && flush(), verbose ? console.debug(fmt, ...args) : (toFlush += fmt, toFlush += (args?.length || 0) >= 1 ? ` (${args.length} suppressed Objects)` : "", toFlush += `
`);
  }
  __name(debugVerbose, "debugVerbose");
  function flush() {
    console.debug(toFlush), toFlush = "";
  }
  __name(flush, "flush");

  // src/background/settingsCompat.ts
  var settingDeprecations = {
    EnableGameTrailer: void 0,
    trustedConnectionsEnabled: void 0,
    currencyTransferEnabled: void 0
  }, compatResults = null, getStoredSettingValue = /* @__PURE__ */ __name(async (setting) => {
    let individual = await chrome.storage.local.get({
      [setting]: void 0
    });
    return individual[setting] !== void 0 ? individual[setting] : (await chrome.storage.local.get({
      rovalra_settings: {}
    })).rovalra_settings?.[setting];
  }, "getStoredSettingValue"), FLAT_SETTINGS_CONFIG = {};
  for (let category of Object.values(SETTINGS_CONFIG))
    for (let [key, value] of Object.entries(category.settings))
      FLAT_SETTINGS_CONFIG[key] = value;
  var cleanup = /* @__PURE__ */ __name((async () => {
  }), "cleanup"), init2 = /* @__PURE__ */ __name((async () => {
    console.debug("RoValra: Verifying settings compat.");
    let deleted = [], replaced = [];
    for (let [setting, replaceFn] of Object.entries(settingDeprecations))
      try {
        let v;
        if ((v = await getStoredSettingValue(setting)) === !0)
          if (debugVerbose(`Replaced setting ${setting}.`, { replacement: String(replaceFn) }), replaceFn === void 0)
            deleted.push(FLAT_SETTINGS_CONFIG[setting].label);
          else
            try {
              let replacements = {};
              await replaceFn(
                v,
                async (key) => (await chrome.storage.local.get({ [key]: void 0 }))[key],
                (key, newValue) => {
                  replacements[key] = newValue;
                }
              ), await chrome.storage.local.set(replacements), replaced.push(setting);
            } catch (e) {
              console.error(`Failed to update setting ${setting} \u2014 unexpected error: `, e);
            }
      } catch (e) {
        console.error(`Failed to retrieve setting ${setting} for compat checks \u2014 unexpected error: `, e);
      }
    let forEachLockedSetting = /* @__PURE__ */ __name((key, data) => {
      let name = data.label;
      deleted.push(name);
    }, "forEachLockedSetting");
    for (let [category, settings] of Object.entries(SETTINGS_CONFIG))
      for (let [setting, data] of Object.entries(settings.settings))
        if (data.locked !== void 0 || data.deprecated !== void 0) {
          let value = await getStoredSettingValue(setting);
          value !== void 0 && value !== !1 && (debugVerbose(`Locked/deprecated setting: ${setting}`, data), forEachLockedSetting(setting, data), await chrome.storage.local.set({ [setting]: !1 }));
        }
    compatResults = { replaced, deleted }, chrome.tabs.query({ active: !0, currentWindow: !0 }, (tabs) => {
      tabs[0]?.id && chrome.tabs.sendMessage(tabs[0].id, { type: "settingsCompatResultData", replaced, deleted }, () => {
      });
    }), await cleanup(), flush(), console.debug("Setting compat checks finished.");
  }), "init");
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => (message.type === "settingsCompatGetRes" && (debugVerbose("Recieved signal settingsCompatGetRes.", { message, data: compatResults }), sendResponse(compatResults), compatResults = { replaced: [], deleted: [] }), !0));
  var settingsCompat_default = init2;

  // src/background/background.js
  var state = {
    isMemoryFixEnabled: !1,
    programmaticallyNavigatedUrls: /* @__PURE__ */ new Set(),
    currentUserId: null,
    latestPresence: null,
    pollingInterval: null,
    csrfTokenCache: null,
    rotatorInterval: null,
    rotatorIndex: 0,
    bannedUserRedirects: /* @__PURE__ */ new Map(),
    privateGameRedirects: /* @__PURE__ */ new Map(),
    scanningUsers: /* @__PURE__ */ new Set(),
    badgeScanningUsers: /* @__PURE__ */ new Set(),
    avatarInventoryScanningUsers: /* @__PURE__ */ new Set(),
    transactionInterval: null,
    badgeInterval: null,
    badgeFullScanInterval: null,
    avatarInventoryInterval: null
  };
  chrome.storage.session && chrome.storage.session.setAccessLevel && chrome.storage.session.setAccessLevel({
    accessLevel: "TRUSTED_AND_UNTRUSTED_CONTEXTS"
  }).catch(
    (err) => console.error("RoValra: Failed to set session access level", err)
  );
  function getDefaultSettings() {
    let defaults = {};
    for (let category of Object.values(SETTINGS_CONFIG))
      for (let [settingName, settingDef] of Object.entries(
        category.settings
      ))
        if (settingDef.default !== void 0 && (defaults[settingName] = settingDef.default), settingDef.childSettings)
          for (let [childName, childSettingDef] of Object.entries(
            settingDef.childSettings
          ))
            childSettingDef.default !== void 0 && (defaults[childName] = childSettingDef.default);
    return defaults;
  }
  __name(getDefaultSettings, "getDefaultSettings");
  function initializeSettings(reason) {
    let defaults = getDefaultSettings();
    chrome.storage.local.get(null, async (currentSettings) => {
      await settingsCompat_default();
      let settingsToUpdate = {}, needsUpdate = !1;
      for (let [key, defaultValue] of Object.entries(defaults)) {
        let storedValue = currentSettings[key];
        if (storedValue === void 0)
          settingsToUpdate[key] = defaultValue, needsUpdate = !0;
        else if (defaultValue !== null) {
          let defaultType = typeof defaultValue, storedType = typeof storedValue;
          storedValue === null ? (console.warn(
            `RoValra: Setting '${key}' was null but expected ${defaultType}. Resetting.`
          ), settingsToUpdate[key] = defaultValue, needsUpdate = !0) : storedType !== defaultType && (console.warn(
            `RoValra: Type mismatch for '${key}'. Expected ${defaultType}, got ${storedType}. Resetting.`
          ), settingsToUpdate[key] = defaultValue, needsUpdate = !0);
        }
      }
      needsUpdate && chrome.storage.local.set(settingsToUpdate, () => {
        chrome.runtime.lastError ? console.error(
          "RoValra: Failed to sync settings.",
          chrome.runtime.lastError
        ) : console.log(
          `RoValra: Synced/Fixed ${Object.keys(settingsToUpdate).length} settings (Trigger: ${reason}).`
        );
      });
    });
  }
  __name(initializeSettings, "initializeSettings");
  function updateUserAgentRule() {
    let originalUA = self.navigator.userAgent, browser = "Unknown", engine = "Unknown";
    originalUA.includes("Firefox/") ? (browser = "Firefox", engine = "Gecko") : originalUA.includes("Edg/") ? (browser = "Edge", engine = "Chromium") : originalUA.includes("OPR/") || originalUA.includes("Opera/") ? (browser = "Opera", engine = "Chromium") : originalUA.includes("Chrome/") ? (browser = "Chrome", engine = "Chromium") : originalUA.includes("Safari/") && (browser = "Safari", engine = "WebKit");
    let manifest = chrome.runtime.getManifest(), version = manifest.version || "Unknown", environment = !("update_url" in manifest) ? "Development" : "Production", rovalraSuffix = `RoValraExtension(RoValra/${browser}/${engine}/${version}/${environment})`;
    (engine === "Gecko" || engine === "WebKit") && (rovalraSuffix += " UnofficialRoValraVersion");
    let rules = [
      {
        id: 999,
        priority: 5,
        action: {
          type: "modifyHeaders",
          requestHeaders: [
            {
              header: "User-Agent",
              operation: "set",
              value: `${originalUA} ${rovalraSuffix}`
            }
          ]
        },
        condition: {
          regexFilter: ".*_RoValraRequest=",
          resourceTypes: ["xmlhttprequest"]
        }
      },
      {
        id: 1e3,
        priority: 10,
        action: {
          type: "modifyHeaders",
          requestHeaders: [
            {
              header: "User-Agent",
              operation: "set",
              value: `Roblox/WinInet ${rovalraSuffix}`
            }
          ]
        },
        condition: {
          regexFilter: "^https://gamejoin\\.roblox\\.com/.*_RoValraRequest=|^https://apis\\.roblox\\.com/player-hydration-service/v1/players/signed",
          resourceTypes: ["xmlhttprequest"]
        }
      }
    ];
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [999, 1e3],
      addRules: rules
    });
  }
  __name(updateUserAgentRule, "updateUserAgentRule");
  function onBeforeRedirectHandler(details) {
    let match = details.url.match(/users\/(\d+)\/profile/);
    match && match[1] && state.bannedUserRedirects.set(details.tabId, match[1]);
  }
  __name(onBeforeRedirectHandler, "onBeforeRedirectHandler");
  function updateBannedUserListener() {
    chrome.webRequest && chrome.permissions.contains({ permissions: ["webRequest"] }, (granted) => {
      granted && chrome.storage.local.get(
        { bannedUserDetectionFallbackEnabled: !1 },
        (data) => {
          data.bannedUserDetectionFallbackEnabled ? chrome.webRequest.onBeforeRedirect.hasListener(
            onBeforeRedirectHandler
          ) || chrome.webRequest.onBeforeRedirect.addListener(
            onBeforeRedirectHandler,
            {
              urls: [
                "*://www.roblox.com/users/*/profile*"
              ]
            }
          ) : chrome.webRequest.onBeforeRedirect.removeListener(
            onBeforeRedirectHandler
          );
        }
      );
    });
  }
  __name(updateBannedUserListener, "updateBannedUserListener");
  function onPrivateGameRedirectHandler(details) {
    let match = details.url.match(/games\/(\d+)/);
    if (match && match[1]) {
      let placeId = match[1];
      state.privateGameRedirects.set(details.tabId, placeId);
    }
  }
  __name(onPrivateGameRedirectHandler, "onPrivateGameRedirectHandler");
  function updatePrivateGameListener() {
    chrome.webRequest && chrome.permissions.contains({ permissions: ["webRequest"] }, (granted) => {
      granted && chrome.storage.local.get(
        { privateGameDetectionFallbackEnabled: !1 },
        (data) => {
          data.privateGameDetectionFallbackEnabled ? chrome.webRequest.onBeforeRedirect.hasListener(
            onPrivateGameRedirectHandler
          ) || chrome.webRequest.onBeforeRedirect.addListener(
            onPrivateGameRedirectHandler,
            {
              urls: ["*://www.roblox.com/games/*"]
            }
          ) : chrome.webRequest.onBeforeRedirect.removeListener(
            onPrivateGameRedirectHandler
          );
        }
      );
    });
  }
  __name(updatePrivateGameListener, "updatePrivateGameListener");
  var handleMemoryLeakNavigation = /* @__PURE__ */ __name((details) => {
    if (state.programmaticallyNavigatedUrls.has(details.url)) {
      state.programmaticallyNavigatedUrls.delete(details.url);
      return;
    }
    if (details.frameId !== 0 || details.transitionType === "auto_subframe" || details.transitionType === "reload" || details.url.includes("/download/client"))
      return;
    let newUrl = details.url, tabId = details.tabId;
    state.programmaticallyNavigatedUrls.add(newUrl), chrome.tabs.update(tabId, { url: "about:blank" }, () => {
      setTimeout(() => {
        chrome.tabs.update(tabId, { url: newUrl });
      }, 50);
    });
  }, "handleMemoryLeakNavigation"), navigationListener = /* @__PURE__ */ __name((details) => {
    state.isMemoryFixEnabled && handleMemoryLeakNavigation(details);
  }, "navigationListener");
  async function setupNavigationListener() {
    await chrome.permissions.contains({
      permissions: ["webNavigation"]
    }) && !chrome.webNavigation.onBeforeNavigate.hasListener(navigationListener) && chrome.webNavigation.onBeforeNavigate.addListener(navigationListener, {
      url: [{ hostContains: ".roblox.com" }],
      urlExcludes: ["roblox-player:*"]
    });
  }
  __name(setupNavigationListener, "setupNavigationListener");
  var contextMenuClickListener = /* @__PURE__ */ __name(async (info, tab) => {
    if (info.menuItemId.startsWith("rovalra-copy-universe-")) {
      let placeId = info.menuItemId.replace("rovalra-copy-universe-", ""), universeId = await getUniverseIdFromPlaceId(placeId);
      universeId && tab?.id && chrome.tabs.sendMessage(tab.id, {
        action: "copyToClipboard",
        text: String(universeId)
      });
    } else if (info.menuItemId.startsWith("rovalra-viewid-")) {
      let id = info.menuItemId.replace("rovalra-viewid-", "");
      id && tab?.id && chrome.tabs.sendMessage(tab.id, {
        action: "view-ids",
        data: {
          targetId: id
        }
      });
    } else if (info.menuItemId.startsWith("rovalra-copy-") && tab?.id) {
      let textToCopy = info.menuItemId.replace("rovalra-copy-", "");
      chrome.tabs.sendMessage(tab.id, {
        action: "copyToClipboard",
        text: textToCopy
      });
    }
  }, "contextMenuClickListener");
  async function setupContextMenuListener() {
    await chrome.permissions.contains({
      permissions: ["contextMenus"]
    }) && chrome.contextMenus && !chrome.contextMenus.onClicked.hasListener(contextMenuClickListener) && chrome.contextMenus.onClicked.addListener(contextMenuClickListener);
  }
  __name(setupContextMenuListener, "setupContextMenuListener");
  async function getUniverseIdFromPlaceId(placeId) {
    try {
      let response = await callRobloxApiBackground({
        subdomain: "apis",
        endpoint: `/universes/v1/places/${placeId}/universe`
      });
      return response.ok ? (await response.json()).universeId : null;
    } catch (e) {
      return console.error("RoValra: Error fetching universe ID from place ID", e), null;
    }
  }
  __name(getUniverseIdFromPlaceId, "getUniverseIdFromPlaceId");
  async function callRobloxApiBackground(options) {
    let {
      subdomain = "api",
      endpoint,
      method = "GET",
      body = null,
      headers = {},
      fullUrl = null
    } = options, url;
    if (fullUrl) {
      let parsedUrl = new URL(fullUrl);
      if (parsedUrl.hostname !== "setup.rbxcdn.com")
        throw new Error("Unsupported fullUrl host for background fetch");
      url = parsedUrl.toString();
    } else
      url = `https://${subdomain}.roblox.com${endpoint}`;
    let separator = url.includes("?") ? "&" : "?";
    endpoint?.includes("/player-hydration-service/v1/players/signed") || (url += `${separator}_RoValraRequest=`);
    let fetchOptions = { method, headers: { ...headers } };
    body && (typeof body == "object" ? (fetchOptions.headers["Content-Type"] = "application/json", fetchOptions.body = JSON.stringify(body)) : fetchOptions.body = body), method !== "GET" && method !== "HEAD" && state.csrfTokenCache && (fetchOptions.headers["X-CSRF-TOKEN"] = state.csrfTokenCache);
    let response = await fetch(url, fetchOptions);
    if (response.status === 403 && method !== "GET" && method !== "HEAD") {
      let newCsrf = response.headers.get("x-csrf-token");
      newCsrf && (state.csrfTokenCache = newCsrf, fetchOptions.headers["X-CSRF-TOKEN"] = newCsrf, response = await fetch(url, fetchOptions));
    }
    return response;
  }
  __name(callRobloxApiBackground, "callRobloxApiBackground");
  async function wearOutfit(outfitData) {
    let callWithRetry = /* @__PURE__ */ __name(async (options) => {
      let response;
      for (let i = 0; i < 4; i++) {
        if (response = await callRobloxApiBackground(options), response.ok) return response;
        if (response.status === 429 || response.status >= 500) {
          i < 3 && await new Promise((r) => setTimeout(r, 1e3));
          continue;
        }
        return response;
      }
      return response;
    }, "callWithRetry");
    try {
      let outfitId = typeof outfitData == "object" && outfitData !== null ? outfitData.itemId : outfitData;
      if (!outfitId)
        return console.error(
          "RoValra: wearOutfit called with invalid outfitData",
          outfitData
        ), { ok: !1 };
      let details = await new Promise((resolve) => {
        chrome.storage.local.get("rovalra_avatar_rotator_details", (data) => {
          resolve(data.rovalra_avatar_rotator_details?.[String(outfitId)] || null);
        });
      });
      if (!details) {
        let detailsRes = await callWithRetry({
          subdomain: "avatar",
          endpoint: `/v4/outfits/${outfitId}/details`
        });
        if (!detailsRes?.ok) return { ok: !1 };
        details = await detailsRes.json();
      }
      let outfitModel = details.outfitModel || details, assets = [...outfitModel.assets || []], backgroundAsset = details.outfitConfigurations?.background?.backgroundAsset, promises = [];
      return backgroundAsset?.id && promises.push(
        callWithRetry({
          subdomain: "avatar",
          endpoint: "/v4/avatar",
          method: "PATCH",
          body: {
            updateTypes: ["UpdateBackground"],
            avatarDefinition: {
              updateAvatarConfig: {
                backgroundRequestModel: {
                  id: backgroundAsset.id
                }
              }
            }
          }
        })
      ), assets.length > 0 && promises.push(
        callWithRetry({
          subdomain: "avatar",
          endpoint: "/v2/avatar/set-wearing-assets",
          method: "POST",
          body: { assets }
        })
      ), outfitModel.playerAvatarType && promises.push(
        callWithRetry({
          subdomain: "avatar",
          endpoint: "/v1/avatar/set-player-avatar-type",
          method: "POST",
          body: { playerAvatarType: outfitModel.playerAvatarType }
        })
      ), outfitModel.scale && promises.push(
        callWithRetry({
          subdomain: "avatar",
          endpoint: "/v1/avatar/set-scales",
          method: "POST",
          body: outfitModel.scale
        })
      ), outfitModel.bodyColor3s && promises.push(
        callWithRetry({
          subdomain: "avatar",
          endpoint: "/v2/avatar/set-body-colors",
          method: "POST",
          body: outfitModel.bodyColor3s
        })
      ), { ok: (await Promise.all(promises)).every((r) => r && r.ok) };
    } catch (e) {
      return console.error("RoValra: Error wearing outfit", e), { ok: !1 };
    }
  }
  __name(wearOutfit, "wearOutfit");
  function handlePresenceUpdate(presence) {
    if (JSON.stringify(presence) !== JSON.stringify(state.latestPresence)) {
      let oldPresence = state.latestPresence;
      state.latestPresence = presence, chrome.tabs.query({ url: "*://*.roblox.com/*" }, (tabs) => {
        tabs.forEach(
          (tab) => chrome.tabs.sendMessage(tab.id, {
            action: "presenceUpdate",
            presence: state.latestPresence
          }).catch(() => {
          })
        );
      });
      let isJoiningGame = /* @__PURE__ */ __name((p) => p && (p.userPresenceType === 2 || p.userPresenceType === 4), "isJoiningGame");
      isJoiningGame(presence) && presence.gameId && presence.rootPlaceId && (!isJoiningGame(oldPresence) || oldPresence.gameId !== presence.gameId) && chrome.storage.local.get(
        { rovalra_server_history: {} },
        (res) => {
          let history = res.rovalra_server_history || {}, gameId = presence.rootPlaceId.toString(), gameHistory = history[gameId] || [], now = Date.now();
          gameHistory = gameHistory.filter(
            (entry) => now - entry.timestamp < 1440 * 60 * 1e3
          );
          let serverIndex = gameHistory.findIndex(
            (entry) => entry.presence.gameId === presence.gameId
          );
          serverIndex > -1 && gameHistory.splice(serverIndex, 1), gameHistory.unshift({ presence, timestamp: now }), history[gameId] = gameHistory.slice(0, 4), chrome.storage.local.set({
            rovalra_server_history: history
          });
        }
      );
    }
  }
  __name(handlePresenceUpdate, "handlePresenceUpdate");
  function pollUserPresence() {
    state.currentUserId && chrome.storage.local.get(
      { recentServersEnabled: !0 },
      async (settings) => {
        if (settings.recentServersEnabled)
          try {
            let response = await callRobloxApiBackground({
              subdomain: "presence",
              endpoint: "/v1/presence/users",
              method: "POST",
              body: { userIds: [parseInt(state.currentUserId, 10)] }
            });
            if (response.ok) {
              let presence = (await response.json())?.userPresences?.[0];
              presence && handlePresenceUpdate(presence);
            }
          } catch {
          }
      }
    );
  }
  __name(pollUserPresence, "pollUserPresence");
  function updateAvatarRotator() {
    chrome.storage.local.get(
      [
        "rovalra_avatar_rotator_enabled",
        "rovalra_avatar_rotator_ids",
        "rovalra_avatar_rotator_interval"
      ],
      (data) => {
        if (state.rotatorInterval && (clearInterval(state.rotatorInterval), state.rotatorInterval = null), data.rovalra_avatar_rotator_enabled && data.rovalra_avatar_rotator_ids?.length > 0) {
          let ids = data.rovalra_avatar_rotator_ids;
          state.rotatorIndex = 0;
          let intervalSeconds = Math.max(
            parseInt(data.rovalra_avatar_rotator_interval, 10) || 5,
            5
          ), rotate = /* @__PURE__ */ __name(() => {
            if (ids.length === 0) return;
            let outfit = ids[state.rotatorIndex];
            wearOutfit(outfit), state.rotatorIndex = (state.rotatorIndex + 1) % ids.length;
          }, "rotate");
          rotate(), state.rotatorInterval = setInterval(
            rotate,
            intervalSeconds * 1e3
          );
        }
      }
    );
  }
  __name(updateAvatarRotator, "updateAvatarRotator");
  var TRANSACTIONS_DATA_KEY = "rovalra_transactions_v2", TRANSACTION_SCAN_LOCKS_KEY = "rovalra_transaction_scan_locks", TRANSACTIONS_STORAGE_VERSION = 4, TRANSACTION_REFRESH_DURATION = 300 * 1e3, TRANSACTION_REQUEST_DELAY = 5e3, TRANSACTION_SCAN_LOCK_DURATION = 120 * 1e3, TRANSACTION_MAX_INTERNAL_ERRORS = 3, BADGES_DATA_KEY = "rovalra_badges_v1", BADGES_STORAGE_VERSION = 2, BADGE_REFRESH_DURATION = 300 * 1e3, BADGE_FULL_REFRESH_DURATION = 1800 * 1e3, BADGE_REQUEST_DELAY = 150, AVATAR_INVENTORY_DATA_KEY = "rovalra_avatar_inventory_v1", AVATAR_INVENTORY_REFRESH_DURATION = 60 * 1e3, AVATAR_INVENTORY_REQUEST_DELAY = 150, AVATAR_INVENTORY_SCAN_TYPES = {
    recentEquipped: {
      sortOption: "recentEquipped",
      timeField: "lastEquipTime",
      latestKey: "latestRecentlyEquippedItems"
    },
    recentAdded: {
      sortOption: "recentAdded",
      timeField: "acquisitionTime",
      latestKey: "latestRecentlyAddedItems"
    }
  };
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  __name(sleep, "sleep");
  function getRateLimitDelay(response) {
    let retryAfterSeconds = Number(response.headers.get("retry-after"));
    if (Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0)
      return retryAfterSeconds * 1e3 + 1e3;
    let remaining = Number(response.headers.get("x-ratelimit-remaining")), resetValue = Number(response.headers.get("x-ratelimit-reset"));
    return Number.isFinite(remaining) && remaining <= 1 && Number.isFinite(resetValue) && resetValue > 0 ? (resetValue > 1e9 ? Math.max(0, resetValue * 1e3 - Date.now()) : resetValue * 1e3) + 1e3 : 0;
  }
  __name(getRateLimitDelay, "getRateLimitDelay");
  async function fetchTransactionsPage(userId, cursor = null) {
    let endpoint = `/transaction-records/v1/users/${userId}/transactions?limit=100&transactionType=Purchase&itemPricingType=PaidAndLimited`;
    for (cursor && (endpoint += `&cursor=${encodeURIComponent(cursor)}`); ; )
      try {
        let response = await callRobloxApiBackground({
          subdomain: "apis",
          endpoint
        });
        if (response.status === 429) {
          await sleep(getRateLimitDelay(response) || 2e3);
          continue;
        }
        return response.status >= 500 && response.status < 600 ? {
          internalError: !0,
          status: response.status,
          rateLimitDelay: getRateLimitDelay(response)
        } : response.ok ? {
          body: await response.json(),
          rateLimitDelay: getRateLimitDelay(response)
        } : null;
      } catch (error) {
        return console.error("RoValra: Failed to fetch transactions page", error), null;
      }
  }
  __name(fetchTransactionsPage, "fetchTransactionsPage");
  async function acquireTransactionScanLock(userId) {
    userId = String(userId);
    let scanId = `${Date.now()}-${Math.random().toString(36).slice(2)}`, locks = (await chrome.storage.local.get([
      TRANSACTION_SCAN_LOCKS_KEY
    ]))[TRANSACTION_SCAN_LOCKS_KEY] || {}, existingLock = locks[userId], now = Date.now();
    return existingLock?.expiresAt && existingLock.expiresAt > now ? null : (locks[userId] = {
      scanId,
      expiresAt: now + TRANSACTION_SCAN_LOCK_DURATION
    }, await chrome.storage.local.set({ [TRANSACTION_SCAN_LOCKS_KEY]: locks }), (await chrome.storage.local.get([
      TRANSACTION_SCAN_LOCKS_KEY
    ]))[TRANSACTION_SCAN_LOCKS_KEY]?.[userId]?.scanId === scanId ? scanId : null);
  }
  __name(acquireTransactionScanLock, "acquireTransactionScanLock");
  async function refreshTransactionScanLock(userId, scanId) {
    let locks = (await chrome.storage.local.get([
      TRANSACTION_SCAN_LOCKS_KEY
    ]))[TRANSACTION_SCAN_LOCKS_KEY] || {};
    return locks[userId]?.scanId !== scanId ? !1 : (locks[userId] = {
      scanId,
      expiresAt: Date.now() + TRANSACTION_SCAN_LOCK_DURATION
    }, await chrome.storage.local.set({ [TRANSACTION_SCAN_LOCKS_KEY]: locks }), !0);
  }
  __name(refreshTransactionScanLock, "refreshTransactionScanLock");
  async function releaseTransactionScanLock(userId, scanId) {
    let locks = (await chrome.storage.local.get([
      TRANSACTION_SCAN_LOCKS_KEY
    ]))[TRANSACTION_SCAN_LOCKS_KEY] || {};
    locks[userId]?.scanId === scanId && (delete locks[userId], await chrome.storage.local.set({ [TRANSACTION_SCAN_LOCKS_KEY]: locks }));
  }
  __name(releaseTransactionScanLock, "releaseTransactionScanLock");
  function processTransaction(transaction) {
    if (!transaction || !transaction.currency || !transaction.agent)
      return null;
    let transactionIdHash = transaction.idHash ? String(transaction.idHash) : null, base = {
      amount: Math.abs(transaction.currency.amount || 0),
      transactionIdHash,
      creatorId: transaction.agent.id || 0,
      creatorType: transaction.agent.type || "User",
      creatorName: transaction.agent.name || "Unknown"
    };
    return transaction.details?.place ? {
      ...base,
      universeId: transaction.details.place.universeId,
      gameName: transaction.details.place.name
    } : base;
  }
  __name(processTransaction, "processTransaction");
  function createEmptyTransactionScan() {
    return {
      totals: { transactions: {} },
      creators: {}
    };
  }
  __name(createEmptyTransactionScan, "createEmptyTransactionScan");
  function normalizeTransactionScan(scan) {
    return {
      totals: {
        transactions: {
          ...scan?.totals?.transactions || {}
        }
      },
      creators: {
        ...scan?.creators || {}
      }
    };
  }
  __name(normalizeTransactionScan, "normalizeTransactionScan");
  function addProcessedTransactionToScan(scan, processed) {
    if (!processed?.transactionIdHash) return !1;
    let idHash = String(processed.transactionIdHash);
    if (scan.totals.transactions[idHash] !== void 0) return !1;
    scan.totals.transactions[idHash] = processed.amount;
    let creatorKey = String(processed.creatorId);
    scan.creators[creatorKey] || (scan.creators[creatorKey] = {
      name: processed.creatorName,
      type: processed.creatorType,
      transactions: {},
      games: {}
    });
    let creator = scan.creators[creatorKey];
    if (creator.name = processed.creatorName || creator.name, creator.type = processed.creatorType || creator.type, creator.transactions[idHash] = processed.amount, processed.universeId) {
      let gameKey = String(processed.universeId);
      creator.games[gameKey] || (creator.games[gameKey] = {
        name: processed.gameName,
        transactions: {}
      });
      let game = creator.games[gameKey];
      game.name = processed.gameName || game.name, game.transactions[idHash] = processed.amount;
    }
    return !0;
  }
  __name(addProcessedTransactionToScan, "addProcessedTransactionToScan");
  function aggregateTemporaryTransactionScan(scan) {
    let aggregated = {
      totals: { totalSpent: 0, totalTransactions: 0 },
      creators: {}
    };
    if (!scan) return aggregated;
    for (let amount of Object.values(scan.totals?.transactions || {}))
      aggregated.totals.totalSpent += amount, aggregated.totals.totalTransactions += 1;
    for (let [creatorKey, creatorScan] of Object.entries(
      scan.creators || {}
    )) {
      let creator = {
        name: creatorScan.name,
        type: creatorScan.type,
        totalSpent: 0,
        totalTransactions: 0,
        games: {}
      };
      for (let amount of Object.values(creatorScan.transactions || {}))
        creator.totalSpent += amount, creator.totalTransactions += 1;
      for (let [gameKey, gameScan] of Object.entries(
        creatorScan.games || {}
      )) {
        let game = {
          name: gameScan.name,
          totalSpent: 0,
          totalTransactions: 0
        };
        for (let amount of Object.values(gameScan.transactions || {}))
          game.totalSpent += amount, game.totalTransactions += 1;
        creator.games[gameKey] = game;
      }
      aggregated.creators[creatorKey] = creator;
    }
    return aggregated;
  }
  __name(aggregateTemporaryTransactionScan, "aggregateTemporaryTransactionScan");
  function getStoredLatestTransactionHashes(userData) {
    return Array.isArray(userData.latestTransactionHashes) ? userData.latestTransactionHashes.filter(Boolean) : userData.latestTransactionHash ? [userData.latestTransactionHash] : [];
  }
  __name(getStoredLatestTransactionHashes, "getStoredLatestTransactionHashes");
  function migrateTransactionUserData(userData = {}) {
    let migrated = {
      ...userData,
      latestTransactionHashes: getStoredLatestTransactionHashes(userData),
      storageVersion: TRANSACTIONS_STORAGE_VERSION
    }, changed = userData.storageVersion !== TRANSACTIONS_STORAGE_VERSION || !Array.isArray(userData.latestTransactionHashes);
    if (userData.storageVersion !== TRANSACTIONS_STORAGE_VERSION) {
      let rescanData2 = {
        ...migrated,
        totals: { totalSpent: 0, totalTransactions: 0 },
        creators: {},
        temporaryTransactions: createEmptyTransactionScan(),
        scanCursor: null,
        isFullyScanned: !1,
        isScanning: !0,
        latestTransactionHashes: []
      };
      return delete rescanData2.latestTransactionHash, delete rescanData2.latestPurchaseToken, delete rescanData2.latestPurchaseTokens, {
        data: rescanData2,
        needsFullRescan: !0,
        changed: !0
      };
    }
    if (delete migrated.latestPurchaseToken, delete migrated.latestPurchaseTokens, migrated.temporaryTransactions && (migrated.temporaryTransactions = normalizeTransactionScan(
      migrated.temporaryTransactions
    ), changed = !0), migrated.temporaryTransactions && migrated.isFullyScanned) {
      let aggregated = aggregateTemporaryTransactionScan(
        migrated.temporaryTransactions
      );
      migrated.totals = aggregated.totals, migrated.creators = aggregated.creators, delete migrated.temporaryTransactions, migrated.scanCursor = null, migrated.isScanning = !1, changed = !0;
    }
    if (migrated.temporaryTransactions && !migrated.isFullyScanned)
      return migrated.isScanning = !0, { data: migrated, needsFullRescan: !1, changed: !0 };
    if (migrated.isFullyScanned)
      return { data: migrated, needsFullRescan: !1, changed };
    let rescanData = {
      ...migrated,
      totals: { totalSpent: 0, totalTransactions: 0 },
      creators: {},
      temporaryTransactions: createEmptyTransactionScan(),
      scanCursor: null,
      isFullyScanned: !1,
      isScanning: !0,
      latestTransactionHashes: []
    };
    return delete rescanData.latestTransactionHash, delete rescanData.latestPurchaseToken, delete rescanData.latestPurchaseTokens, {
      data: rescanData,
      needsFullRescan: !0,
      changed: !0
    };
  }
  __name(migrateTransactionUserData, "migrateTransactionUserData");
  function mergeTransactionsIntoAggregated(existingAggregated, rawTransactions) {
    let updated = existingAggregated || {
      totals: { totalSpent: 0, totalTransactions: 0 },
      creators: {}
    };
    return rawTransactions.forEach((tx) => {
      let processed = processTransaction(tx);
      if (!processed) return;
      updated.totals.totalSpent += processed.amount, updated.totals.totalTransactions += 1;
      let creatorKey = String(processed.creatorId);
      updated.creators[creatorKey] || (updated.creators[creatorKey] = {
        name: processed.creatorName,
        type: processed.creatorType,
        totalSpent: 0,
        totalTransactions: 0,
        games: {}
      });
      let creator = updated.creators[creatorKey];
      if (creator.name = processed.creatorName || creator.name, creator.totalSpent += processed.amount, creator.totalTransactions += 1, processed.universeId) {
        creator.games[processed.universeId] || (creator.games[processed.universeId] = {
          name: processed.gameName,
          totalSpent: 0,
          totalTransactions: 0
        });
        let game = creator.games[processed.universeId];
        game.totalSpent += processed.amount, game.totalTransactions += 1;
      }
    }), updated;
  }
  __name(mergeTransactionsIntoAggregated, "mergeTransactionsIntoAggregated");
  async function handleBackgroundTransactionScan(userId) {
    if (userId = String(userId), !(await chrome.storage.local.get({
      TotalSpentGamesEnabled: !0
    })).TotalSpentGamesEnabled || state.scanningUsers.has(userId)) return;
    let scanId = await acquireTransactionScanLock(userId);
    if (scanId) {
      state.scanningUsers.add(userId);
      try {
        let allData = (await chrome.storage.local.get([TRANSACTIONS_DATA_KEY]))[TRANSACTIONS_DATA_KEY] || {}, userData = allData[userId] || {}, migration = migrateTransactionUserData(userData);
        migration.changed && (allData[userId] = migration.data, await chrome.storage.local.set({
          [TRANSACTIONS_DATA_KEY]: allData
        }));
        let now = Date.now();
        if (migration.needsFullRescan)
          await runTransactionLoop(userId, migration.data, !1, scanId);
        else if (migration.data.isFullyScanned) {
          let lastCheck = migration.data.lastIncrementalCheck || migration.data.lastFullScan || 0;
          if (now - lastCheck < TRANSACTION_REFRESH_DURATION) return;
          await runTransactionLoop(userId, migration.data, !0, scanId);
        } else
          await runTransactionLoop(userId, migration.data, !1, scanId);
      } finally {
        state.scanningUsers.delete(userId), await releaseTransactionScanLock(userId, scanId);
      }
    }
  }
  __name(handleBackgroundTransactionScan, "handleBackgroundTransactionScan");
  async function runTransactionLoop(userId, existingData, isIncremental, scanId) {
    let cursor = isIncremental ? null : existingData.scanCursor || null, pagesChecked = 0, foundMatch = !1, emptyPageCount = 0, internalErrorCount = 0, temporaryScan = isIncremental ? createEmptyTransactionScan() : normalizeTransactionScan(existingData.temporaryTransactions), latestTransactionHashes = getStoredLatestTransactionHashes(existingData), currentAggregated = {
      totals: existingData.totals || { totalSpent: 0, totalTransactions: 0 },
      creators: existingData.creators || {}
    }, persistTransactionData = /* @__PURE__ */ __name(async (scanFinished) => {
      if (!await refreshTransactionScanLock(userId, scanId)) return !1;
      !isIncremental && scanFinished && (currentAggregated = aggregateTemporaryTransactionScan(temporaryScan));
      let allData = (await chrome.storage.local.get([TRANSACTIONS_DATA_KEY]))[TRANSACTIONS_DATA_KEY] || {}, nextUserData = {
        ...existingData,
        ...currentAggregated,
        latestTransactionHashes,
        latestTransactionHash: latestTransactionHashes[0],
        scanCursor: isIncremental ? null : cursor,
        isFullyScanned: scanFinished,
        isScanning: !scanFinished,
        storageVersion: TRANSACTIONS_STORAGE_VERSION,
        [isIncremental ? "lastIncrementalCheck" : "lastFullScan"]: Date.now()
      };
      return isIncremental || scanFinished ? delete nextUserData.temporaryTransactions : nextUserData.temporaryTransactions = temporaryScan, delete nextUserData.latestPurchaseToken, delete nextUserData.latestPurchaseTokens, allData[userId] = nextUserData, await chrome.storage.local.set({ [TRANSACTIONS_DATA_KEY]: allData }), !0;
    }, "persistTransactionData");
    for (; await refreshTransactionScanLock(userId, scanId); ) {
      let page = await fetchTransactionsPage(userId, cursor);
      if (!page) break;
      if (page.internalError) {
        if (internalErrorCount++, internalErrorCount >= TRANSACTION_MAX_INTERNAL_ERRORS) {
          console.warn(
            "RoValra: Treating repeated Roblox transaction internal errors as end of scan",
            {
              userId,
              cursor,
              status: page.status,
              internalErrorCount
            }
          ), await persistTransactionData(!0);
          break;
        }
        await sleep(
          Math.max(TRANSACTION_REQUEST_DELAY, page.rateLimitDelay || 0)
        );
        continue;
      }
      internalErrorCount = 0;
      let data = page.body;
      if (!data.data || data.data.length === 0) {
        if (emptyPageCount++, emptyPageCount >= 5 || !data.nextPageCursor) {
          cursor = data.nextPageCursor, await persistTransactionData(!0);
          break;
        }
        cursor = data.nextPageCursor;
        continue;
      }
      emptyPageCount = 0;
      let newBatch = [];
      for (let tx of data.data) {
        let processed = processTransaction(tx), uniqueKey = processed?.transactionIdHash;
        if (uniqueKey && temporaryScan.totals.transactions[String(uniqueKey)] === void 0) {
          if (isIncremental && latestTransactionHashes.includes(String(uniqueKey))) {
            foundMatch = !0;
            break;
          }
          addProcessedTransactionToScan(temporaryScan, processed), newBatch.push(tx);
        }
      }
      if (isIncremental && (currentAggregated = mergeTransactionsIntoAggregated(
        currentAggregated,
        newBatch
      )), pagesChecked === 0) {
        let firstTransactionHashes = data.data.map((tx) => processTransaction(tx)?.transactionIdHash).filter(Boolean).map(String).slice(0, 2);
        latestTransactionHashes = [
          .../* @__PURE__ */ new Set([
            ...firstTransactionHashes,
            ...latestTransactionHashes
          ])
        ].slice(0, 2);
      }
      if (cursor = data.nextPageCursor, pagesChecked++, !await persistTransactionData(isIncremental || !cursor) || !cursor || foundMatch || isIncremental && pagesChecked >= 5)
        break;
      await sleep(Math.max(TRANSACTION_REQUEST_DELAY, page.rateLimitDelay));
    }
    isIncremental && !foundMatch && pagesChecked >= 5 && await runTransactionLoop(userId, currentAggregated, !1, scanId);
  }
  __name(runTransactionLoop, "runTransactionLoop");
  async function fetchBadgesPage(userId, cursor = null) {
    let endpoint = `/v1/users/${userId}/badges?limit=100&sortOrder=Desc`;
    for (cursor && (endpoint += `&cursor=${encodeURIComponent(cursor)}`); ; )
      try {
        let response = await callRobloxApiBackground({
          subdomain: "badges",
          endpoint
        });
        if (response.status === 429) {
          let resetSeconds = parseInt(
            response.headers.get("x-ratelimit-reset"),
            10
          ), retryDelay = Number.isFinite(resetSeconds) ? Math.max(resetSeconds, 1) * 1e3 : 1e4;
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
          continue;
        }
        return response.ok ? await response.json() : null;
      } catch (error) {
        return console.error("RoValra: Failed to fetch badges page", error), null;
      }
  }
  __name(fetchBadgesPage, "fetchBadgesPage");
  function processBadge(badge) {
    let badgeId = badge?.id, placeId = badge?.awarder?.id;
    return !badgeId || !placeId || badge?.enabled !== !1 ? null : {
      badgeId: String(badgeId),
      placeId: String(placeId)
    };
  }
  __name(processBadge, "processBadge");
  function removeBadgeFromAggregated(aggregated, badgeId, placeId) {
    delete aggregated.badges[badgeId];
    let badgeIds = aggregated.places?.[placeId]?.badgeIds;
    badgeIds && (aggregated.places[placeId].badgeIds = badgeIds.filter(
      (id) => id !== badgeId
    ), aggregated.places[placeId].badgeIds.length === 0 && delete aggregated.places[placeId]);
  }
  __name(removeBadgeFromAggregated, "removeBadgeFromAggregated");
  function mergeBadgesIntoAggregated(existingAggregated, rawBadges) {
    let updated = existingAggregated || {
      totals: { totalBadges: 0 },
      badges: {},
      places: {}
    };
    return updated.totals = updated.totals || { totalBadges: 0 }, updated.badges = updated.badges || {}, updated.places = updated.places || {}, rawBadges.forEach((badge) => {
      let rawBadgeId = badge?.id ? String(badge.id) : null, rawPlaceId = badge?.awarder?.id ? String(badge.awarder.id) : null;
      if (rawBadgeId && rawPlaceId && badge?.enabled !== !1) {
        removeBadgeFromAggregated(updated, rawBadgeId, rawPlaceId);
        return;
      }
      let processed = processBadge(badge);
      if (!processed) return;
      let { badgeId, placeId } = processed, isNewBadge = !updated.badges[badgeId];
      updated.badges[badgeId] = processed, updated.places[placeId] || (updated.places[placeId] = { badgeIds: [] }), updated.places[placeId].badgeIds.includes(badgeId) || updated.places[placeId].badgeIds.push(badgeId), isNewBadge && (updated.totals.totalBadges += 1);
    }), updated.totals.totalBadges = Object.keys(updated.badges).length, updated;
  }
  __name(mergeBadgesIntoAggregated, "mergeBadgesIntoAggregated");
  async function handleBackgroundBadgeScan(userId, options = {}) {
    userId = String(userId);
    let forceFullScan = !!options.forceFullScan;
    if (!state.badgeScanningUsers.has(userId)) {
      state.badgeScanningUsers.add(userId);
      try {
        let userData = ((await chrome.storage.local.get([BADGES_DATA_KEY]))[BADGES_DATA_KEY] || {})[userId] || {}, needsStorageMigration = userData.storageVersion !== BADGES_STORAGE_VERSION, now = Date.now();
        if (userData.isFullyScanned && !needsStorageMigration) {
          let lastFullBadgeCheck = userData.lastFullBadgeCheck || userData.lastFullScan || 0, isFullBadgeCheckDue = now - lastFullBadgeCheck >= BADGE_FULL_REFRESH_DURATION;
          if (forceFullScan && !isFullBadgeCheckDue) return;
          if (forceFullScan || isFullBadgeCheckDue) {
            await runBadgeLoop(userId, userData, !1, {
              resetCursor: !0,
              timestampKey: "lastFullBadgeCheck"
            });
            return;
          }
          let lastCheck = userData.lastIncrementalCheck || userData.lastFullScan || 0;
          if (now - lastCheck < BADGE_REFRESH_DURATION) return;
          await runBadgeLoop(userId, userData, !0);
        } else
          await runBadgeLoop(
            userId,
            needsStorageMigration ? {
              ...userData,
              totals: { totalBadges: 0 },
              badges: {},
              places: {},
              scanCursor: null
            } : userData,
            !1
          );
      } finally {
        state.badgeScanningUsers.delete(userId);
      }
    }
  }
  __name(handleBackgroundBadgeScan, "handleBackgroundBadgeScan");
  async function runBadgeLoop(userId, existingData, isIncremental, options = {}) {
    let cursor = isIncremental || options.resetCursor ? null : existingData.scanCursor || null, pagesChecked = 0, foundMatch = !1, emptyPageCount = 0, seenBadgeIds = /* @__PURE__ */ new Set(), currentAggregated = {
      totals: existingData.totals || { totalBadges: 0 },
      badges: existingData.badges || {},
      places: existingData.places || {},
      latestBadgeIds: existingData.latestBadgeIds || []
    };
    for (; ; ) {
      let data = await fetchBadgesPage(userId, cursor);
      if (!data) break;
      if (!data.data || data.data.length === 0) {
        if (emptyPageCount++, emptyPageCount >= 5 || !data.nextPageCursor) break;
        cursor = data.nextPageCursor;
        continue;
      }
      emptyPageCount = 0;
      let newBatch = [];
      for (let badge of data.data) {
        let badgeId = badge?.id ? String(badge.id) : null;
        if (!(!badgeId || seenBadgeIds.has(badgeId))) {
          if (seenBadgeIds.add(badgeId), isIncremental && currentAggregated.latestBadgeIds.includes(badgeId)) {
            foundMatch = !0;
            break;
          }
          newBatch.push(badge);
        }
      }
      if (currentAggregated = mergeBadgesIntoAggregated(
        currentAggregated,
        newBatch
      ), pagesChecked === 0) {
        let firstBadgeIds = data.data.map((badge) => badge?.id ? String(badge.id) : null).filter(Boolean).slice(0, 10);
        currentAggregated.latestBadgeIds = [
          .../* @__PURE__ */ new Set([
            ...firstBadgeIds,
            ...currentAggregated.latestBadgeIds
          ])
        ].slice(0, 10);
      }
      cursor = data.nextPageCursor, pagesChecked++;
      let allData = (await chrome.storage.local.get([BADGES_DATA_KEY]))[BADGES_DATA_KEY] || {}, timestampKey = options.timestampKey || (isIncremental ? "lastIncrementalCheck" : "lastFullScan");
      if (allData[userId] = {
        ...existingData,
        ...currentAggregated,
        latestBadgeId: currentAggregated.latestBadgeIds[0],
        scanCursor: isIncremental ? null : cursor,
        isFullyScanned: isIncremental || !cursor,
        isScanning: !isIncremental && !!cursor,
        storageVersion: BADGES_STORAGE_VERSION,
        [timestampKey]: Date.now()
      }, await chrome.storage.local.set({ [BADGES_DATA_KEY]: allData }), !cursor || foundMatch || isIncremental && pagesChecked >= 10)
        break;
      await new Promise((r) => setTimeout(r, BADGE_REQUEST_DELAY));
    }
    isIncremental && !foundMatch && pagesChecked >= 10 && await runBadgeLoop(userId, currentAggregated, !1);
  }
  __name(runBadgeLoop, "runBadgeLoop");
  async function fetchAvatarInventoryPage(sortOption, pageToken = null) {
    let endpoint = `/v1/avatar-inventory?sortOption=${encodeURIComponent(sortOption)}&pageLimit=120`;
    for (pageToken && (endpoint += `&pageToken=${encodeURIComponent(pageToken)}`); ; )
      try {
        let response = await callRobloxApiBackground({
          subdomain: "avatar",
          endpoint
        });
        if (response.status === 429) {
          let resetSeconds = parseInt(
            response.headers.get("x-ratelimit-reset"),
            10
          ), retryDelay = Number.isFinite(resetSeconds) ? Math.max(resetSeconds, 1) * 1e3 : 1e4;
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
          continue;
        }
        return response.ok ? await response.json() : null;
      } catch (error) {
        return console.error(
          "RoValra: Failed to fetch avatar inventory page",
          error
        ), null;
      }
  }
  __name(fetchAvatarInventoryPage, "fetchAvatarInventoryPage");
  function getAvatarInventorySignature(item, timeField) {
    let itemId = item?.itemId ? String(item.itemId) : null;
    return itemId ? `${itemId}:${item?.[timeField] || ""}` : null;
  }
  __name(getAvatarInventorySignature, "getAvatarInventorySignature");
  function mergeAvatarInventoryIntoAggregated(existingAggregated, rawItems, timeField) {
    let updated = existingAggregated || {
      totals: { totalItems: 0 },
      items: {}
    };
    return updated.totals = updated.totals || { totalItems: 0 }, updated.items = updated.items || {}, rawItems.forEach((item) => {
      let itemId = item?.itemId ? String(item.itemId) : null;
      if (!itemId) return;
      let existingItem = updated.items[itemId] || { itemId }, isNewItem = !updated.items[itemId];
      updated.items[itemId] = {
        ...existingItem,
        itemId,
        itemName: item.itemName || existingItem.itemName || "",
        availabilityStatus: item.availabilityStatus || existingItem.availabilityStatus || "",
        itemCategory: item.itemCategory || existingItem.itemCategory || {},
        [timeField]: item[timeField] || existingItem[timeField] || null
      }, isNewItem && (updated.totals.totalItems += 1);
    }), updated;
  }
  __name(mergeAvatarInventoryIntoAggregated, "mergeAvatarInventoryIntoAggregated");
  async function handleBackgroundAvatarInventoryScan(userId) {
    if (userId = String(userId), !state.avatarInventoryScanningUsers.has(userId)) {
      state.avatarInventoryScanningUsers.add(userId);
      try {
        let userData = ((await chrome.storage.local.get([
          AVATAR_INVENTORY_DATA_KEY
        ]))[AVATAR_INVENTORY_DATA_KEY] || {})[userId] || {}, now = Date.now();
        if (userData.isFullyScanned) {
          let lastCheck = userData.lastIncrementalCheck || userData.lastFullScan || 0;
          if (now - lastCheck < AVATAR_INVENTORY_REFRESH_DURATION) return;
          await runAvatarInventoryScan(userId, userData, !0);
        } else
          await runAvatarInventoryScan(userId, userData, !1);
      } finally {
        state.avatarInventoryScanningUsers.delete(userId);
      }
    }
  }
  __name(handleBackgroundAvatarInventoryScan, "handleBackgroundAvatarInventoryScan");
  async function runAvatarInventoryScan(userId, existingData, isIncremental) {
    let currentAggregated = {
      totals: existingData.totals || { totalItems: 0 },
      items: existingData.items || {},
      scanCursors: existingData.scanCursors || {},
      scanComplete: existingData.scanComplete || {},
      latestRecentlyEquippedItems: existingData.latestRecentlyEquippedItems || [],
      latestRecentlyAddedItems: existingData.latestRecentlyAddedItems || []
    };
    for (let [scanType, config] of Object.entries(
      AVATAR_INVENTORY_SCAN_TYPES
    ))
      currentAggregated = await runAvatarInventoryLoopForType(
        userId,
        existingData,
        currentAggregated,
        scanType,
        config,
        isIncremental
      );
  }
  __name(runAvatarInventoryScan, "runAvatarInventoryScan");
  async function runAvatarInventoryLoopForType(userId, existingData, currentAggregated, scanType, config, isIncremental) {
    let cursor = isIncremental ? null : currentAggregated.scanCursors?.[scanType] || null, pagesChecked = 0, foundMatch = !1, emptyPageCount = 0, seenSignatures = /* @__PURE__ */ new Set();
    for (; ; ) {
      let data = await fetchAvatarInventoryPage(config.sortOption, cursor);
      if (!data) break;
      let items = data.avatarInventoryItems || [];
      if (items.length === 0) {
        if (emptyPageCount++, emptyPageCount >= 5 || !data.nextPageToken) break;
        cursor = data.nextPageToken;
        continue;
      }
      emptyPageCount = 0;
      let newBatch = [];
      for (let item of items) {
        let signature = getAvatarInventorySignature(
          item,
          config.timeField
        );
        if (!(!signature || seenSignatures.has(signature))) {
          if (seenSignatures.add(signature), isIncremental && currentAggregated[config.latestKey].includes(signature)) {
            foundMatch = !0;
            break;
          }
          newBatch.push(item);
        }
      }
      if (currentAggregated = mergeAvatarInventoryIntoAggregated(
        currentAggregated,
        newBatch,
        config.timeField
      ), pagesChecked === 0) {
        let firstSignatures = items.map(
          (item) => getAvatarInventorySignature(item, config.timeField)
        ).filter(Boolean).slice(0, 20);
        currentAggregated[config.latestKey] = [
          .../* @__PURE__ */ new Set([
            ...firstSignatures,
            ...currentAggregated[config.latestKey]
          ])
        ].slice(0, 20);
      }
      cursor = data.nextPageToken, pagesChecked++, currentAggregated.scanCursors = {
        ...currentAggregated.scanCursors || {},
        [scanType]: isIncremental ? null : cursor
      }, currentAggregated.scanComplete = {
        ...currentAggregated.scanComplete || {},
        [scanType]: isIncremental || !cursor
      };
      let scanComplete = currentAggregated.scanComplete || {}, isFullyScanned = Object.keys(AVATAR_INVENTORY_SCAN_TYPES).every(
        (key) => !!scanComplete[key]
      ), allData = (await chrome.storage.local.get([
        AVATAR_INVENTORY_DATA_KEY
      ]))[AVATAR_INVENTORY_DATA_KEY] || {};
      if (allData[userId] = {
        ...existingData,
        ...currentAggregated,
        isFullyScanned,
        isScanning: !isIncremental && !isFullyScanned,
        [isIncremental ? "lastIncrementalCheck" : "lastFullScan"]: Date.now()
      }, await chrome.storage.local.set({
        [AVATAR_INVENTORY_DATA_KEY]: allData
      }), !cursor || foundMatch || isIncremental && pagesChecked >= 5)
        break;
      await new Promise((r) => setTimeout(r, AVATAR_INVENTORY_REQUEST_DELAY));
    }
    return isIncremental && !foundMatch && pagesChecked >= 5 ? (currentAggregated.scanCursors = {
      ...currentAggregated.scanCursors || {},
      [scanType]: null
    }, currentAggregated.scanComplete = {
      ...currentAggregated.scanComplete || {},
      [scanType]: !1
    }, runAvatarInventoryLoopForType(
      userId,
      existingData,
      currentAggregated,
      scanType,
      config,
      !1
    )) : currentAggregated;
  }
  __name(runAvatarInventoryLoopForType, "runAvatarInventoryLoopForType");
  function uint8ToBase64(u8) {
    let binary = "";
    for (let i = 0; i < u8.length; i += 8192)
      binary += String.fromCharCode.apply(null, u8.subarray(i, i + 8192));
    return btoa(binary);
  }
  __name(uint8ToBase64, "uint8ToBase64");
  var customFontCache = /* @__PURE__ */ new Map();
  function getAssetIdFromValue(value) {
    if (typeof value == "number" && Number.isFinite(value))
      return String(Math.trunc(value));
    if (typeof value != "string") return null;
    let match = value.match(/\d+/);
    return match ? match[0] : null;
  }
  __name(getAssetIdFromValue, "getAssetIdFromValue");
  function detectFontMimeType(bytes) {
    if (!(bytes instanceof Uint8Array) || bytes.length < 4)
      return "application/octet-stream";
    let signature = String.fromCharCode(
      bytes[0],
      bytes[1],
      bytes[2],
      bytes[3]
    );
    return signature === "OTTO" ? "font/otf" : signature === "ttcf" ? "font/collection" : signature === "wOFF" ? "font/woff" : signature === "wOF2" ? "font/woff2" : bytes[0] === 0 && bytes[1] === 1 && bytes[2] === 0 && bytes[3] === 0 || signature === "true" || signature === "typ1" ? "font/ttf" : "application/octet-stream";
  }
  __name(detectFontMimeType, "detectFontMimeType");
  function findFontFaces(fontInfo) {
    return !fontInfo || typeof fontInfo != "object" ? [] : Array.isArray(fontInfo.faces) ? fontInfo.faces : Array.isArray(fontInfo.Faces) ? fontInfo.Faces : Array.isArray(fontInfo.fonts) ? fontInfo.fonts : [fontInfo];
  }
  __name(findFontFaces, "findFontFaces");
  async function fetchAssetDelivery(assetId) {
    return callRobloxApiBackground({
      subdomain: "assetdelivery",
      endpoint: `/v1/asset/?id=${encodeURIComponent(assetId)}`
    });
  }
  __name(fetchAssetDelivery, "fetchAssetDelivery");
  async function getCustomFontFamily(assetId) {
    let normalizedAssetId = getAssetIdFromValue(assetId);
    if (!normalizedAssetId) throw new Error("Invalid custom font asset id");
    if (customFontCache.has(normalizedAssetId))
      return customFontCache.get(normalizedAssetId);
    let promise = (async () => {
      let infoResponse = await fetchAssetDelivery(normalizedAssetId);
      if (!infoResponse.ok)
        throw new Error(
          `Font info request failed: HTTP ${infoResponse.status}`
        );
      let fontInfo = await infoResponse.json(), familyName = `RoValraCustomFont${normalizedAssetId}`, faces = [];
      for (let face of findFontFaces(fontInfo)) {
        let faceAssetId = getAssetIdFromValue(
          face.assetId ?? face.AssetId ?? face.assetID ?? face.id ?? face.Id
        );
        if (!faceAssetId) continue;
        let fileResponse = await fetchAssetDelivery(faceAssetId);
        if (!fileResponse.ok) {
          console.warn(
            `RoValra: Custom font file ${faceAssetId} failed with HTTP ${fileResponse.status}`
          );
          continue;
        }
        let fontBytes = new Uint8Array(await fileResponse.arrayBuffer());
        faces.push({
          weight: Number(face.weight ?? face.Weight ?? 400) || 400,
          style: face.style ?? face.Style ?? "normal",
          mimeType: detectFontMimeType(fontBytes),
          base64: uint8ToBase64(fontBytes)
        });
      }
      if (faces.length === 0)
        throw new Error(
          "Custom font did not contain any downloadable faces"
        );
      return { success: !0, name: familyName, faces };
    })();
    customFontCache.set(normalizedAssetId, promise);
    try {
      return await promise;
    } catch (error) {
      throw customFontCache.delete(normalizedAssetId), error;
    }
  }
  __name(getCustomFontFamily, "getCustomFontFamily");
  chrome.runtime.onInstalled.addListener((details) => {
    chrome.storage.local.remove("rovalra_transactions_data"), chrome.storage.local.get({ rovalra_installed_at: null }, (result) => {
      result.rovalra_installed_at || chrome.storage.local.set({ rovalra_installed_at: Date.now() });
    }), initializeSettings(details.reason), setupContextMenuListener();
  });
  chrome.runtime.onStartup.addListener(() => {
    initializeSettings("startup"), setupContextMenuListener();
  });
  chrome.storage.onChanged.addListener((changes, namespace) => {
    namespace === "local" && (changes.MemoryleakFixEnabled && (state.isMemoryFixEnabled = changes.MemoryleakFixEnabled.newValue, state.isMemoryFixEnabled && setupNavigationListener()), (changes.rovalra_avatar_rotator_enabled || changes.rovalra_avatar_rotator_ids || changes.rovalra_avatar_rotator_interval) && updateAvatarRotator(), (changes.privateGameViewerEnabled || changes.privateGameDetectionFallbackEnabled) && updatePrivateGameListener(), (changes.bannedUserViewerEnabled || changes.bannedUserDetectionFallbackEnabled) && updateBannedUserListener(), changes.TotalSpentGamesEnabled && (changes.TotalSpentGamesEnabled.newValue === !1 ? state.transactionInterval && (clearInterval(state.transactionInterval), state.transactionInterval = null) : state.currentUserId && (handleBackgroundTransactionScan(state.currentUserId), state.transactionInterval && clearInterval(state.transactionInterval), state.transactionInterval = setInterval(() => {
      handleBackgroundTransactionScan(state.currentUserId);
    }, TRANSACTION_REFRESH_DURATION))));
  });
  chrome.permissions.onAdded.addListener((permissions) => {
    permissions.permissions?.includes("webNavigation") && setupNavigationListener(), permissions.permissions?.includes("contextMenus") && setupContextMenuListener(), permissions.permissions?.includes("webRequest") && (updateBannedUserListener(), updatePrivateGameListener()), chrome.tabs.query({}, (tabs) => {
      tabs.forEach(
        (tab) => chrome.tabs.sendMessage(tab.id, { action: "permissionsUpdated" }).catch(() => {
        })
      );
    });
  });
  chrome.permissions.onRemoved.addListener((permissions) => {
    permissions.permissions?.includes("webNavigation") && chrome.webNavigation.onBeforeNavigate.hasListener(navigationListener) && chrome.webNavigation.onBeforeNavigate.removeListener(
      navigationListener
    ), permissions.permissions?.includes("contextMenus") && chrome.contextMenus?.onClicked.hasListener(contextMenuClickListener) && chrome.contextMenus.onClicked.removeListener(contextMenuClickListener), permissions.permissions?.includes("webRequest") && chrome.webRequest.onBeforeRedirect.removeListener(
      onBeforeRedirectHandler
    ), chrome.tabs.query({}, (tabs) => {
      tabs.forEach(
        (tab) => chrome.tabs.sendMessage(tab.id, { action: "permissionsUpdated" }).catch(() => {
        })
      );
    });
  });
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.action) {
      case "fetchJson":
        return fetch(request.url).then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        }).then((data) => sendResponse({ data })).catch((err) => sendResponse({ error: err.message })), !0;
      case "updateOfflineRule":
        return chrome.declarativeNetRequest.updateEnabledRulesets(
          request.enabled ? { enableRulesetIds: ["ruleset_status"] } : { disableRulesetIds: ["ruleset_status"] }
        ), sendResponse({ success: !0 }), !1;
      case "updateEarlyAccessRule":
        return chrome.declarativeNetRequest.updateEnabledRulesets(
          request.enabled ? { enableRulesetIds: ["ruleset_3"] } : { disableRulesetIds: ["ruleset_3"] }
        ), sendResponse({ success: !0 }), !1;
      case "enableServerJoinHeaders":
        return chrome.declarativeNetRequest.updateEnabledRulesets({
          enableRulesetIds: ["ruleset_2"]
        }), !1;
      case "disableServerJoinHeaders":
        return chrome.declarativeNetRequest.updateEnabledRulesets({
          disableRulesetIds: ["ruleset_2"]
        }), !1;
      case "injectScript":
        return chrome.scripting.executeScript({
          target: { tabId: sender.tab.id },
          world: "MAIN",
          func: /* @__PURE__ */ __name((code) => {
            try {
              let script = document.createElement("script");
              script.textContent = code, document.documentElement.appendChild(script), script.remove();
            } catch {
            }
          }, "func"),
          args: [request.codeToInject]
        }).then(() => sendResponse({ success: !0 })).catch(
          (err) => sendResponse({ success: !1, error: err.message })
        ), !0;
      case "toggleMemoryLeakFix":
        return state.isMemoryFixEnabled = request.enabled, sendResponse({ success: !0 }), !1;
      case "injectMainWorldScript":
        return sender.tab?.id && chrome.scripting.executeScript({
          target: { tabId: sender.tab.id },
          files: [request.path],
          world: "MAIN"
        }), sendResponse({ success: !0 }), !1;
      case "checkPermission":
        return chrome.permissions.contains(
          { permissions: [].concat(request.permission) },
          (granted) => {
            sendResponse({ granted });
          }
        ), !0;
      case "requestPermission":
        return chrome.permissions.request(
          { permissions: [].concat(request.permission) },
          (granted) => {
            chrome.runtime.lastError && console.warn(
              "RoValra: Permission request failed:",
              chrome.runtime.lastError
            ), sendResponse({ granted: !!granted });
          }
        ), !0;
      case "revokePermission":
        return chrome.permissions.remove(
          { permissions: [].concat(request.permission) },
          (removed) => {
            chrome.runtime.lastError ? sendResponse({
              revoked: !1,
              error: chrome.runtime.lastError.message
            }) : sendResponse({ revoked: removed });
          }
        ), !0;
      case "updateUserId":
        return request.userId && request.userId !== state.currentUserId && (state.currentUserId = request.userId, state.latestPresence = null, state.pollingInterval && clearInterval(state.pollingInterval), pollUserPresence(), state.pollingInterval = setInterval(pollUserPresence, 5e3), state.transactionInterval && (clearInterval(state.transactionInterval), state.transactionInterval = null), state.badgeInterval && (clearInterval(state.badgeInterval), state.badgeInterval = null), state.badgeFullScanInterval && (clearInterval(state.badgeFullScanInterval), state.badgeFullScanInterval = null), state.avatarInventoryInterval && (clearInterval(state.avatarInventoryInterval), state.avatarInventoryInterval = null), chrome.storage.local.get(
          { TotalSpentGamesEnabled: !0 },
          (settings) => {
            settings.TotalSpentGamesEnabled && (handleBackgroundTransactionScan(
              state.currentUserId
            ), state.transactionInterval = setInterval(() => {
              handleBackgroundTransactionScan(
                state.currentUserId
              );
            }, TRANSACTION_REFRESH_DURATION));
          }
        ), handleBackgroundBadgeScan(state.currentUserId), state.badgeInterval = setInterval(() => {
          handleBackgroundBadgeScan(state.currentUserId);
        }, BADGE_REFRESH_DURATION), state.badgeFullScanInterval = setInterval(() => {
          handleBackgroundBadgeScan(state.currentUserId, {
            forceFullScan: !0
          });
        }, BADGE_FULL_REFRESH_DURATION), handleBackgroundAvatarInventoryScan(state.currentUserId), state.avatarInventoryInterval = setInterval(() => {
          handleBackgroundAvatarInventoryScan(state.currentUserId);
        }, AVATAR_INVENTORY_REFRESH_DURATION)), !1;
      case "triggerTransactionScan":
        return handleBackgroundTransactionScan(request.userId), !1;
      case "triggerBadgeScan":
        return handleBackgroundBadgeScan(request.userId, {
          forceFullScan: !!request.forceFullScan
        }), !1;
      case "triggerAvatarInventoryScan":
        return handleBackgroundAvatarInventoryScan(request.userId), !1;
      case "getBannedUserRedirect": {
        let userId = state.bannedUserRedirects.get(sender.tab?.id);
        return state.bannedUserRedirects.delete(sender.tab?.id), sendResponse({ userId }), !1;
      }
      case "getPrivateGameRedirect": {
        let placeId = state.privateGameRedirects.get(sender.tab?.id);
        return state.privateGameRedirects.delete(sender.tab?.id), sendResponse({ placeId }), !1;
      }
      case "presencePollResult":
        return !1;
      case "getLatestPresence":
        return sendResponse({ presence: state.latestPresence }), !1;
      case "wearOutfit":
        return wearOutfit(request.outfitId).then(sendResponse), !0;
      case "getCustomFontFamily":
        return getCustomFontFamily(request.assetId).then(sendResponse).catch((err) => {
          sendResponse({ success: !1, error: err.message });
        }), !0;
      case "fetchRobloxApi":
        return callRobloxApiBackground(request.options).then(async (response) => {
          let headers = {};
          response.headers.forEach(
            (val, key) => headers[key] = val
          );
          let body = request.options?.responseType === "arrayBuffer" ? await response.arrayBuffer().catch(() => null) : await response.text().catch(() => null);
          sendResponse({
            ok: response.ok,
            status: response.status,
            statusText: response.statusText,
            headers,
            body
          });
        }).catch((err) => {
          console.error("RoValra: Background API fetch failed", err), sendResponse({
            ok: !1,
            status: 500,
            statusText: "Extension Error",
            body: null
          });
        }), !0;
      case "updateContextMenu":
        return chrome.contextMenus && (request.feature === "copyid" ? chrome.storage.local.get(
          ["copyIdEnabled", "copyUniverseIdEnabled"],
          (settings) => {
            chrome.contextMenus.removeAll(() => {
              !chrome.runtime.lastError && request.ids?.length > 0 && request.ids.forEach((item) => {
                item.type === "Universe" ? settings.copyUniverseIdEnabled && chrome.contextMenus.create({
                  id: `rovalra-copy-universe-${item.id}`,
                  title: item.title,
                  contexts: ["link"],
                  documentUrlPatterns: [
                    "*://*.roblox.com/*"
                  ]
                }) : settings.copyIdEnabled && chrome.contextMenus.create({
                  id: `rovalra-copy-${item.id}`,
                  title: item.title,
                  contexts: ["link"],
                  documentUrlPatterns: [
                    "*://*.roblox.com/*"
                  ]
                });
              });
            });
          }
        ) : request.feature === "viewid" && request.ids.forEach((id) => {
          chrome.storage.local.get(
            ["viewIdEnabled"],
            (settings) => {
              settings.viewIdEnabled && chrome.contextMenus.create({
                id: `rovalra-viewid-${id}`,
                title: request.data.title,
                contexts: ["link"],
                documentUrlPatterns: [
                  "*://*.roblox.com/*"
                ]
              });
            }
          );
        })), !1;
    }
    return !1;
  });
  chrome.storage.local.get("MemoryleakFixEnabled", (result) => {
    result.MemoryleakFixEnabled && (state.isMemoryFixEnabled = !0, setupNavigationListener());
  });
  updateUserAgentRule();
  updateAvatarRotator();
  setupContextMenuListener();
  updateBannedUserListener();
  updatePrivateGameListener();
})();
