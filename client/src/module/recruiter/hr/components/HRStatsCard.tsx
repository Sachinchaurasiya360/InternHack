
i
m
p
o
r
t
 
R
e
a
c
t
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


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
 
L
u
c
i
d
e
I
c
o
n
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;




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
r
o
p
s
 
{


 
 
i
c
o
n
:
 
L
u
c
i
d
e
I
c
o
n
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


 
 
v
a
l
u
e
:
 
n
u
m
b
e
r
 
|
 
s
t
r
i
n
g
;


 
 
c
o
l
o
r
?
:
 
s
t
r
i
n
g
;


 
 
i
n
d
e
x
?
:
 
n
u
m
b
e
r
;


}




c
o
n
s
t
 
H
R
S
t
a
t
s
C
a
r
d
 
=
 
R
e
a
c
t
.
m
e
m
o
(
f
u
n
c
t
i
o
n
 
H
R
S
t
a
t
s
C
a
r
d
(
{
 
i
c
o
n
:
 
I
c
o
n
,
 
l
a
b
e
l
,
 
v
a
l
u
e
,
 
c
o
l
o
r
 
=
 
"
t
e
x
t
-
i
n
d
i
g
o
-
6
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
i
n
d
i
g
o
-
4
0
0
"
,
 
i
n
d
e
x
 
=
 
0
 
}
:
 
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
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
2
 
}
}


 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
3
5
,
 
d
e
l
a
y
:
 
i
n
d
e
x
 
*
 
0
.
0
6
 
}
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
"
b
g
-
w
h
i
t
e
 
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
a
y
-
9
0
0
 
r
o
u
n
d
e
d
-
x
l
 
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
g
r
a
y
-
1
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
g
r
a
y
-
8
0
0
 
p
-
5
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
c
e
n
t
e
r
 
g
a
p
-
3
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
{
`
w
-
1
0
 
h
-
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
x
l
 
b
g
-
g
r
a
y
-
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
g
r
a
y
-
8
0
0
 
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
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
$
{
c
o
l
o
r
}
`
}
>


 
 
 
 
 
 
 
 
 
 
<
I
c
o
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
 
h
-
5
"
 
/
>


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
<
p
 
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
2
x
l
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
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
w
h
i
t
e
"
>
{
v
a
l
u
e
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
p
 
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
x
s
 
t
e
x
t
-
g
r
a
y
-
5
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
g
r
a
y
-
4
0
0
"
>
{
l
a
b
e
l
}
<
/
p
>


 
 
 
 
 
 
 
 
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


 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
)
;


}
)
;




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
H
R
S
t
a
t
s
C
a
r
d
;


