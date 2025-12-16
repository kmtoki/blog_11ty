require 'date'

Dir.glob("*.md").each do |file|
  md = File.read(file, encoding: "UTF-8")
  res = md.each_line.map do |line|
    date_done = false
    if not date_done then
      date = line.match /^date:\s+(.+)$/
      if date then
        dt = DateTime.parse(date[1])
        date_done = true
        line = dt.strftime("date: %F %T\n")
      end
    end

    tags_done = false
    if not tags_done then
      category = line.match /^category:\s*(?:\s+(.+))?$/
      if category then
        tags = "tags: "
        if category[1] == nil then
          tags += "\n" 
        else
          cs = category[1].split(/\s+/)
          if cs.length == 1 then
            tags += cs[0] + "\n"
          else
            tags += cs.map{|c| "\n  - #{c}" }.join + "\n"
          end
        end
        tags_done = true
        line = tags
      end
    end

    line
  end.join

  File.write(file, res)
end
