
i
n
t
e
r
f
a
c
e
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
P
r
o
p
s
 
{


 
 
l
i
n
e
s
:
 
s
t
r
i
n
g
[
]
;


 
 
a
c
t
i
v
e
L
i
n
e
?
:
 
n
u
m
b
e
r
;


 
 
t
i
t
l
e
?
:
 
s
t
r
i
n
g
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
(
{
 
l
i
n
e
s
,
 
a
c
t
i
v
e
L
i
n
e
,
 
t
i
t
l
e
 
=
 
"
p
s
e
u
d
o
c
o
d
e
"
 
}
:
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
P
r
o
p
s
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
-
9
5
0
 
d
a
r
k
:
b
g
-
b
l
a
c
k
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
3
 
p
y
-
2
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
-
8
0
0
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
/
 
{
t
i
t
l
e
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
y
-
1
"
>


 
 
 
 
 
 
 
 
{
l
i
n
e
s
.
m
a
p
(
(
l
i
n
e
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
i
 
=
=
=
 
a
c
t
i
v
e
L
i
n
e
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
3
 
p
x
-
3
 
p
y
-
1
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
x
s
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
l
i
m
e
-
4
0
0
/
1
5
 
t
e
x
t
-
l
i
m
e
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
t
e
x
t
-
s
t
o
n
e
-
3
0
0
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
9
0
0
/
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
t
e
x
t
-
r
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
t
a
b
u
l
a
r
-
n
u
m
s
 
s
e
l
e
c
t
-
n
o
n
e
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
r
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
m
-
0
 
w
h
i
t
e
s
p
a
c
e
-
p
r
e
-
w
r
a
p
 
f
o
n
t
-
m
o
n
o
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
 
?
 
"
t
e
x
t
-
l
i
m
e
-
2
0
0
"
 
:
 
"
t
e
x
t
-
s
t
o
n
e
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
i
n
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
r
e
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


