
i
m
p
o
r
t
 
{
 
u
s
e
Q
u
e
r
y
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
y
"
;


i
m
p
o
r
t
 
a
p
i
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
a
x
i
o
s
"
;




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
T
r
a
c
k
P
r
o
g
r
e
s
s
 
{


 
 
c
o
m
p
l
e
t
e
d
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
:
 
n
u
m
b
e
r
;


 
 
l
a
b
e
l
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
 
u
s
e
T
r
a
c
k
P
r
o
g
r
e
s
s
(
)
 
{


 
 
c
o
n
s
t
 
d
s
a
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
[
"
d
s
a
-
p
r
o
g
r
e
s
s
-
s
u
m
m
a
r
y
"
]
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
a
p
i
.
g
e
t
(
"
/
d
s
a
/
m
y
-
p
r
o
g
r
e
s
s
"
)
.
t
h
e
n
(
(
r
)
 
=
>
 
r
.
d
a
t
a
)
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
6
0
_
0
0
0
,


 
 
 
 
r
e
t
r
y
:
 
f
a
l
s
e
,


 
 
}
)
;




 
 
c
o
n
s
t
 
a
p
t
i
t
u
d
e
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
[
"
a
p
t
i
t
u
d
e
-
p
r
o
g
r
e
s
s
-
s
u
m
m
a
r
y
"
]
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
a
p
i
.
g
e
t
(
"
/
a
p
t
i
t
u
d
e
/
p
r
o
g
r
e
s
s
"
)
.
t
h
e
n
(
(
r
)
 
=
>
 
r
.
d
a
t
a
)
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
6
0
_
0
0
0
,


 
 
 
 
r
e
t
r
y
:
 
f
a
l
s
e
,


 
 
}
)
;




 
 
c
o
n
s
t
 
i
n
t
e
r
v
i
e
w
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
[
"
i
n
t
e
r
v
i
e
w
-
p
r
o
g
r
e
s
s
-
s
u
m
m
a
r
y
"
]
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
a
p
i
.
g
e
t
(
"
/
l
e
a
r
n
/
i
n
t
e
r
v
i
e
w
/
p
r
o
g
r
e
s
s
"
)
.
t
h
e
n
(
(
r
)
 
=
>
 
r
.
d
a
t
a
)
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
6
0
_
0
0
0
,


 
 
 
 
r
e
t
r
y
:
 
f
a
l
s
e
,


 
 
}
)
;




 
 
c
o
n
s
t
 
r
o
a
d
m
a
p
s
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
[
"
r
o
a
d
m
a
p
-
e
n
r
o
l
l
m
e
n
t
s
-
s
u
m
m
a
r
y
"
]
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
a
p
i
.
g
e
t
(
"
/
r
o
a
d
m
a
p
s
/
m
e
/
e
n
r
o
l
l
m
e
n
t
s
"
)
.
t
h
e
n
(
(
r
)
 
=
>
 
r
.
d
a
t
a
)
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
6
0
_
0
0
0
,


 
 
 
 
r
e
t
r
y
:
 
f
a
l
s
e
,


 
 
}
)
;




 
 
c
o
n
s
t
 
s
q
l
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
[
"
s
q
l
-
p
r
o
g
r
e
s
s
-
s
u
m
m
a
r
y
"
]
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
a
p
i
.
g
e
t
(
"
/
s
q
l
/
p
r
o
g
r
e
s
s
"
)
.
t
h
e
n
(
(
r
)
 
=
>
 
r
.
d
a
t
a
)
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
6
0
_
0
0
0
,


 
 
 
 
r
e
t
r
y
:
 
f
a
l
s
e
,


 
 
}
)
;




 
 
c
o
n
s
t
 
p
r
o
g
r
e
s
s
M
a
p
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
T
r
a
c
k
P
r
o
g
r
e
s
s
 
|
 
n
u
l
l
>
 
=
 
{


 
 
 
 
i
n
t
e
r
v
i
e
w
:
 
i
n
t
e
r
v
i
e
w
.
d
a
t
a


 
 
 
 
 
 
?
 
{
 
c
o
m
p
l
e
t
e
d
:
 
i
n
t
e
r
v
i
e
w
.
d
a
t
a
.
c
o
m
p
l
e
t
e
d
I
d
s
?
.
l
e
n
g
t
h
 
?
?
 
0
,
 
t
o
t
a
l
:
 
3
0
0
,
 
l
a
b
e
l
:
 
"
q
u
e
s
t
i
o
n
s
 
a
n
s
w
e
r
e
d
"
 
}


 
 
 
 
 
 
:
 
n
u
l
l
,


 
 
 
 
"
d
s
a
-
f
o
u
n
d
a
t
i
o
n
s
"
:
 
d
s
a
.
d
a
t
a


 
 
 
 
 
 
?
 
{
 
c
o
m
p
l
e
t
e
d
:
 
d
s
a
.
d
a
t
a
.
t
o
t
a
l
S
o
l
v
e
d
 
?
?
 
0
,
 
t
o
t
a
l
:
 
d
s
a
.
d
a
t
a
.
t
o
t
a
l
P
r
o
b
l
e
m
s
 
?
?
 
2
5
0
0
,
 
l
a
b
e
l
:
 
"
p
r
o
b
l
e
m
s
 
s
o
l
v
e
d
"
 
}


 
 
 
 
 
 
:
 
n
u
l
l
,


 
 
 
 
a
p
t
i
t
u
d
e
:
 
a
p
t
i
t
u
d
e
.
d
a
t
a


 
 
 
 
 
 
?
 
{
 
c
o
m
p
l
e
t
e
d
:
 
a
p
t
i
t
u
d
e
.
d
a
t
a
.
t
o
t
a
l
A
n
s
w
e
r
e
d
 
?
?
 
0
,
 
t
o
t
a
l
:
 
a
p
t
i
t
u
d
e
.
d
a
t
a
.
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
 
?
?
 
5
0
0
,
 
l
a
b
e
l
:
 
"
q
u
e
s
t
i
o
n
s
 
a
n
s
w
e
r
e
d
"
 
}


 
 
 
 
 
 
:
 
n
u
l
l
,


 
 
 
 
s
q
l
:
 
s
q
l
.
d
a
t
a


 
 
 
 
 
 
?
 
{
 
c
o
m
p
l
e
t
e
d
:
 
s
q
l
.
d
a
t
a
.
l
e
n
g
t
h
 
?
?
 
0
,
 
t
o
t
a
l
:
 
1
8
8
,
 
l
a
b
e
l
:
 
"
e
x
e
r
c
i
s
e
s
 
d
o
n
e
"
 
}


 
 
 
 
 
 
:
 
n
u
l
l
,


 
 
 
 
r
o
a
d
m
a
p
s
:
 
r
o
a
d
m
a
p
s
.
d
a
t
a
?
.
e
n
r
o
l
l
m
e
n
t
s


 
 
 
 
 
 
?
 
{
 
c
o
m
p
l
e
t
e
d
:
 
r
o
a
d
m
a
p
s
.
d
a
t
a
.
e
n
r
o
l
l
m
e
n
t
s
.
l
e
n
g
t
h
,
 
t
o
t
a
l
:
 
0
,
 
l
a
b
e
l
:
 
"
r
o
a
d
m
a
p
s
 
e
n
r
o
l
l
e
d
"
 
}


 
 
 
 
 
 
:
 
n
u
l
l
,


 
 
}
;




 
 
r
e
t
u
r
n
 
{
 
p
r
o
g
r
e
s
s
M
a
p
,
 
i
s
L
o
a
d
i
n
g
:
 
d
s
a
.
i
s
L
o
a
d
i
n
g
 
|
|
 
a
p
t
i
t
u
d
e
.
i
s
L
o
a
d
i
n
g
 
|
|
 
i
n
t
e
r
v
i
e
w
.
i
s
L
o
a
d
i
n
g
 
|
|
 
r
o
a
d
m
a
p
s
.
i
s
L
o
a
d
i
n
g
 
}
;


}


