
i
m
p
o
r
t
 
t
y
p
e
 
{
 
S
c
r
a
p
e
d
J
o
b
S
o
u
r
c
e
 
}
 
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
l
i
b
/
t
y
p
e
s
"
;




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
 
g
e
t
S
o
u
r
c
e
B
a
d
g
e
C
o
l
o
r
(
s
r
c
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
s
w
i
t
c
h
 
(
s
r
c
)
 
{


 
 
 
 
c
a
s
e
 
"
r
e
m
o
t
i
v
e
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
"
b
g
-
p
u
r
p
l
e
-
1
0
0
 
t
e
x
t
-
p
u
r
p
l
e
-
7
0
0
 
d
a
r
k
:
b
g
-
p
u
r
p
l
e
-
9
0
0
/
3
0
 
d
a
r
k
:
t
e
x
t
-
p
u
r
p
l
e
-
4
0
0
"
;


 
 
 
 
c
a
s
e
 
"
a
r
b
e
i
t
n
o
w
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
"
b
g
-
b
l
u
e
-
1
0
0
 
t
e
x
t
-
b
l
u
e
-
7
0
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
u
e
-
9
0
0
/
3
0
 
d
a
r
k
:
t
e
x
t
-
b
l
u
e
-
4
0
0
"
;


 
 
 
 
c
a
s
e
 
"
a
d
z
u
n
a
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
"
b
g
-
g
r
e
e
n
-
1
0
0
 
t
e
x
t
-
g
r
e
e
n
-
7
0
0
 
d
a
r
k
:
b
g
-
g
r
e
e
n
-
9
0
0
/
3
0
 
d
a
r
k
:
t
e
x
t
-
g
r
e
e
n
-
4
0
0
"
;


 
 
 
 
c
a
s
e
 
"
l
i
n
k
e
d
i
n
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
"
b
g
-
s
k
y
-
1
0
0
 
t
e
x
t
-
s
k
y
-
7
0
0
 
d
a
r
k
:
b
g
-
s
k
y
-
9
0
0
/
3
0
 
d
a
r
k
:
t
e
x
t
-
s
k
y
-
4
0
0
"
;


 
 
 
 
d
e
f
a
u
l
t
:


 
 
 
 
 
 
r
e
t
u
r
n
 
"
b
g
-
s
t
o
n
e
-
1
0
0
 
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
7
0
0
 
d
a
r
k
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
8
0
0
 
d
a
r
k
:
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
"
;


 
 
}


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
 
g
e
t
S
o
u
r
c
e
L
a
b
e
l
(
s
r
c
:
 
s
t
r
i
n
g
,
 
s
o
u
r
c
e
s
:
 
S
c
r
a
p
e
d
J
o
b
S
o
u
r
c
e
[
]
)
:
 
s
t
r
i
n
g
 
{


 
 
c
o
n
s
t
 
f
o
u
n
d
 
=
 
s
o
u
r
c
e
s
.
f
i
n
d
(
(
s
)
 
=
>
 
s
.
i
d
 
=
=
=
 
s
r
c
)
;


 
 
r
e
t
u
r
n
 
f
o
u
n
d
 
?
 
f
o
u
n
d
.
n
a
m
e
 
:
 
s
r
c
;


}


