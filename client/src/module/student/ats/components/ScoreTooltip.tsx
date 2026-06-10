
/
*
*
 
R
e
c
h
a
r
t
s
 
c
u
s
t
o
m
 
t
o
o
l
t
i
p
 
—
 
r
e
n
d
e
r
s
 
s
c
o
r
e
,
 
d
a
t
e
,
 
r
o
l
e
,
 
a
n
d
 
r
e
s
u
m
e
 
n
a
m
e
 
o
n
 
d
o
t
 
h
o
v
e
r
.
 
*
/


t
y
p
e
 
S
c
o
r
e
T
o
o
l
t
i
p
P
a
y
l
o
a
d
 
=
 
{


 
 
p
a
y
l
o
a
d
:
 
{


 
 
 
 
f
u
l
l
D
a
t
e
:
 
s
t
r
i
n
g
;


 
 
 
 
j
o
b
T
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
 
 
r
e
s
u
m
e
N
a
m
e
:
 
s
t
r
i
n
g
;


 
 
 
 
s
c
o
r
e
:
 
n
u
m
b
e
r
;


 
 
}
;


}
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
 
S
c
o
r
e
T
o
o
l
t
i
p
(
{


 
 
a
c
t
i
v
e
,


 
 
p
a
y
l
o
a
d
,


}
:
 
{


 
 
a
c
t
i
v
e
?
:
 
b
o
o
l
e
a
n
;


 
 
p
a
y
l
o
a
d
?
:
 
S
c
o
r
e
T
o
o
l
t
i
p
P
a
y
l
o
a
d
[
]
;


}
)
 
{


 
 
i
f
 
(
!
a
c
t
i
v
e
 
|
|
 
!
p
a
y
l
o
a
d
?
.
l
e
n
g
t
h
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
c
o
n
s
t
 
d
 
=
 
p
a
y
l
o
a
d
[
0
]
.
p
a
y
l
o
a
d
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
w
h
i
t
e
/
1
0
 
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
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
[
1
1
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
 
s
h
a
d
o
w
-
x
l
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
5
0
0
 
m
b
-
1
"
>
{
d
.
f
u
l
l
D
a
t
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
>
R
o
l
e
:
 
{
d
.
j
o
b
T
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
t
r
u
n
c
a
t
e
 
m
a
x
-
w
-
[
2
0
0
p
x
]
"
>
R
e
s
u
m
e
:
 
{
d
.
r
e
s
u
m
e
N
a
m
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
4
0
0
 
f
o
n
t
-
b
o
l
d
 
m
t
-
1
"
>
S
c
o
r
e
:
 
{
d
.
s
c
o
r
e
}
/
1
0
0
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


