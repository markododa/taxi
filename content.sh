export IFS=,
cp index.tmpl public/index.html
while read ime broj _; do
if [ $ime == "ime" ]; then
	continue
fi

sed -i "/header.png/a \<div class="button"><a onclick="post\(\"$ime\"\)" id="$ime" href=\"tel://$broj\">$ime</a></div>" public/index.html
done <<< $(tac taxi.csv)
