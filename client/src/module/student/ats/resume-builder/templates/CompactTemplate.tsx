
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
 
R
e
s
u
m
e
D
a
t
a
 
}
 
f
r
o
m
 
"
.
.
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
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
C
o
m
p
a
c
t
T
e
m
p
l
a
t
e
(
{


 
 
d
a
t
a
,


 
 
s
e
c
t
i
o
n
O
r
d
e
r
 
=
 
[
"
s
u
m
m
a
r
y
"
,
 
"
e
x
p
e
r
i
e
n
c
e
"
,
 
"
e
d
u
c
a
t
i
o
n
"
,
 
"
s
k
i
l
l
s
"
,
 
"
p
r
o
j
e
c
t
s
"
,
 
"
c
e
r
t
i
f
i
c
a
t
i
o
n
s
"
]
,


}
:
 
{


 
 
d
a
t
a
:
 
R
e
s
u
m
e
D
a
t
a
;


 
 
s
e
c
t
i
o
n
O
r
d
e
r
?
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


}
)
 
{


 
 
c
o
n
s
t
 
{
 
p
e
r
s
o
n
a
l
I
n
f
o
,
 
s
u
m
m
a
r
y
,
 
e
x
p
e
r
i
e
n
c
e
,
 
e
d
u
c
a
t
i
o
n
,
 
s
k
i
l
l
s
,
 
p
r
o
j
e
c
t
s
,
 
c
e
r
t
i
f
i
c
a
t
i
o
n
s
 
}
 
=
 
d
a
t
a
;




 
 
c
o
n
s
t
 
r
e
n
d
e
r
S
e
c
t
i
o
n
 
=
 
(
k
e
y
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
s
w
i
t
c
h
 
(
k
e
y
)
 
{


 
 
 
 
 
 
c
a
s
e
 
"
s
u
m
m
a
r
y
"
:


 
 
 
 
 
 
 
 
/
/
 
S
u
m
m
a
r
y
 
i
s
 
a
l
r
e
a
d
y
 
i
n
 
t
h
e
 
h
e
a
d
e
r
 
i
n
 
t
h
i
s
 
t
e
m
p
l
a
t
e
,
 
b
u
t
 
w
e
'
l
l
 
a
l
l
o
w
 
i
t
 
a
s
 
a
 
s
e
c
t
i
o
n
 
t
o
o
 
i
f
 
n
e
e
d
e
d
/
c
o
n
s
i
s
t
e
n
t


 
 
 
 
 
 
 
 
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
a
s
e
 
"
s
k
i
l
l
s
"
:


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
s
k
i
l
l
s
.
l
e
n
g
t
h
 
>
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
"
s
k
i
l
l
s
"
 
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
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
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
[
9
p
x
]
 
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
r
 
m
b
-
1
"
>
S
k
i
l
l
s
<
/
h
2
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
g
r
a
y
-
6
0
0
 
t
e
x
t
-
[
9
p
x
]
"
>
{
s
k
i
l
l
s
.
j
o
i
n
(
"
 
·
 
"
)
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


 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
;


 
 
 
 
 
 
c
a
s
e
 
"
e
x
p
e
r
i
e
n
c
e
"
:


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
e
x
p
e
r
i
e
n
c
e
.
l
e
n
g
t
h
 
>
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
"
e
x
p
e
r
i
e
n
c
e
"
 
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
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
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
[
9
p
x
]
 
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
r
 
m
b
-
1
.
5
"
>
E
x
p
e
r
i
e
n
c
e
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
{
e
x
p
e
r
i
e
n
c
e
.
m
a
p
(
(
e
x
p
)
 
=
>
 
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
e
x
p
.
i
d
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
m
b
-
2
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
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
i
t
e
m
s
-
b
a
s
e
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
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
"
>
{
e
x
p
.
t
i
t
l
e
}
<
/
s
p
a
n
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
 
m
x
-
1
"
>
@
<
/
s
p
a
n
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
6
0
0
"
>
{
e
x
p
.
c
o
m
p
a
n
y
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
t
e
x
t
-
[
8
p
x
]
 
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
 
s
h
r
i
n
k
-
0
 
m
l
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
x
p
.
s
t
a
r
t
D
a
t
e
}
 
-
 
{
e
x
p
.
c
u
r
r
e
n
t
 
?
 
"
P
r
e
s
e
n
t
"
 
:
 
e
x
p
.
e
n
d
D
a
t
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
x
p
.
d
e
s
c
r
i
p
t
i
o
n
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
u
l
 
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
m
t
-
0
.
5
 
s
p
a
c
e
-
y
-
0
 
l
i
s
t
-
d
i
s
c
 
l
i
s
t
-
i
n
s
i
d
e
 
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
6
0
0
 
t
e
x
t
-
[
9
p
x
]
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
x
p
.
d
e
s
c
r
i
p
t
i
o
n
.
s
p
l
i
t
(
"
\
n
"
)
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
.
s
l
i
c
e
(
0
,
 
3
)
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
k
e
y
=
{
i
}
>
{
l
i
n
e
.
r
e
p
l
a
c
e
(
/
^
[
-
•
]
\
s
*
/
,
 
"
"
)
}
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
;


 
 
 
 
 
 
c
a
s
e
 
"
e
d
u
c
a
t
i
o
n
"
:


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
e
d
u
c
a
t
i
o
n
.
l
e
n
g
t
h
 
>
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
"
e
d
u
c
a
t
i
o
n
"
 
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
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
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
[
9
p
x
]
 
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
r
 
m
b
-
1
.
5
"
>
E
d
u
c
a
t
i
o
n
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
{
e
d
u
c
a
t
i
o
n
.
m
a
p
(
(
e
d
u
)
 
=
>
 
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
e
d
u
.
i
d
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
m
b
-
1
.
5
"
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
d
u
.
d
e
g
r
e
e
}
{
e
d
u
.
f
i
e
l
d
 
?
 
`
,
 
$
{
e
d
u
.
f
i
e
l
d
}
`
 
:
 
"
"
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
g
r
a
y
-
5
0
0
 
t
e
x
t
-
[
9
p
x
]
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
d
u
.
i
n
s
t
i
t
u
t
i
o
n
}
 
|
 
{
e
d
u
.
e
n
d
D
a
t
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
d
u
.
g
p
a
 
?
 
`
 
|
 
G
P
A
:
 
$
{
e
d
u
.
g
p
a
}
`
 
:
 
"
"
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


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
;


 
 
 
 
 
 
c
a
s
e
 
"
c
e
r
t
i
f
i
c
a
t
i
o
n
s
"
:


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
c
e
r
t
i
f
i
c
a
t
i
o
n
s
.
l
e
n
g
t
h
 
>
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
"
c
e
r
t
i
f
i
c
a
t
i
o
n
s
"
 
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
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
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
[
9
p
x
]
 
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
r
 
m
b
-
1
.
5
"
>
C
e
r
t
i
f
i
c
a
t
i
o
n
s
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
{
c
e
r
t
i
f
i
c
a
t
i
o
n
s
.
m
a
p
(
(
c
e
r
t
)
 
=
>
 
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
c
e
r
t
.
i
d
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
m
b
-
1
"
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
g
r
a
y
-
7
0
0
 
t
e
x
t
-
[
9
p
x
]
"
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
f
o
n
t
-
b
o
l
d
"
>
{
c
e
r
t
.
n
a
m
e
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
e
r
t
.
i
s
s
u
e
r
 
?
 
`
 
-
 
$
{
c
e
r
t
.
i
s
s
u
e
r
}
`
 
:
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
e
r
t
.
d
a
t
e
 
?
 
`
 
(
$
{
c
e
r
t
.
d
a
t
e
}
)
`
 
:
 
"
"
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


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
;


 
 
 
 
 
 
c
a
s
e
 
"
p
r
o
j
e
c
t
s
"
:


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
p
r
o
j
e
c
t
s
.
l
e
n
g
t
h
 
>
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
"
p
r
o
j
e
c
t
s
"
 
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
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
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
[
9
p
x
]
 
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
r
 
m
b
-
1
.
5
"
>
P
r
o
j
e
c
t
s
<
/
h
2
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
j
e
c
t
s
.
m
a
p
(
(
p
r
o
j
)
 
=
>
 
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
p
r
o
j
.
i
d
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
m
b
-
1
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
b
a
s
e
l
i
n
e
 
g
a
p
-
1
"
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
"
>
{
p
r
o
j
.
n
a
m
e
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
j
.
l
i
n
k
 
&
&
 
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
t
e
x
t
-
[
8
p
x
]
 
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
p
r
o
j
.
l
i
n
k
}
<
/
s
p
a
n
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
j
.
t
e
c
h
S
t
a
c
k
 
&
&
 
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
[
8
p
x
]
 
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
p
r
o
j
.
t
e
c
h
S
t
a
c
k
}
<
/
p
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
j
.
d
e
s
c
r
i
p
t
i
o
n
 
&
&
 
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
g
r
a
y
-
6
0
0
 
t
e
x
t
-
[
9
p
x
]
"
>
{
p
r
o
j
.
d
e
s
c
r
i
p
t
i
o
n
}
<
/
p
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
 
:
 
n
u
l
l
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
 
n
u
l
l
;


 
 
 
 
}


 
 
}
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
w
-
f
u
l
l
 
b
g
-
w
h
i
t
e
 
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
8
0
0
 
f
o
n
t
-
s
a
n
s
 
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
 
l
e
a
d
i
n
g
-
s
n
u
g
 
p
-
6
"
>


 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
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
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
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
g
r
a
y
-
2
0
0
 
p
b
-
2
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
h
1
 
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
g
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
e
r
s
o
n
a
l
I
n
f
o
.
f
u
l
l
N
a
m
e
 
|
|
 
"
Y
o
u
r
 
N
a
m
e
"
}


 
 
 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
 
 
{
s
u
m
m
a
r
y
 
&
&
 
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
g
r
a
y
-
5
0
0
 
t
e
x
t
-
[
9
p
x
]
 
m
t
-
1
 
m
a
x
-
w
-
[
7
5
%
]
"
>
{
s
u
m
m
a
r
y
}
<
/
p
>
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
[
9
p
x
]
 
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
 
s
h
r
i
n
k
-
0
 
s
p
a
c
e
-
y
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
{
p
e
r
s
o
n
a
l
I
n
f
o
.
e
m
a
i
l
 
&
&
 
<
p
>
{
p
e
r
s
o
n
a
l
I
n
f
o
.
e
m
a
i
l
}
<
/
p
>
}


 
 
 
 
 
 
 
 
 
 
{
p
e
r
s
o
n
a
l
I
n
f
o
.
p
h
o
n
e
 
&
&
 
<
p
>
{
p
e
r
s
o
n
a
l
I
n
f
o
.
p
h
o
n
e
}
<
/
p
>
}


 
 
 
 
 
 
 
 
 
 
{
p
e
r
s
o
n
a
l
I
n
f
o
.
l
o
c
a
t
i
o
n
 
&
&
 
<
p
>
{
p
e
r
s
o
n
a
l
I
n
f
o
.
l
o
c
a
t
i
o
n
}
<
/
p
>
}


 
 
 
 
 
 
 
 
 
 
{
p
e
r
s
o
n
a
l
I
n
f
o
.
l
i
n
k
e
d
I
n
 
&
&
 
<
p
>
{
p
e
r
s
o
n
a
l
I
n
f
o
.
l
i
n
k
e
d
I
n
}
<
/
p
>
}


 
 
 
 
 
 
 
 
 
 
{
p
e
r
s
o
n
a
l
I
n
f
o
.
p
o
r
t
f
o
l
i
o
 
&
&
 
<
p
>
{
p
e
r
s
o
n
a
l
I
n
f
o
.
p
o
r
t
f
o
l
i
o
}
<
/
p
>
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




 
 
 
 
 
 
{
s
e
c
t
i
o
n
O
r
d
e
r
.
m
a
p
(
r
e
n
d
e
r
S
e
c
t
i
o
n
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


