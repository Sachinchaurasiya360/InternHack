
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
S
t
a
t
e
 
}
 
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
 
{
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
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
 
{
 
C
h
e
v
r
o
n
D
o
w
n
,
 
L
i
g
h
t
b
u
l
b
,
 
C
o
d
e
2
 
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


i
m
p
o
r
t
 
{
 
q
u
e
r
y
K
e
y
s
 
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
q
u
e
r
y
-
k
e
y
s
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
 
D
s
a
A
p
p
r
o
a
c
h
E
n
t
r
y
 
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




i
n
t
e
r
f
a
c
e
 
D
s
a
A
p
p
r
o
a
c
h
e
s
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


 
 
s
l
u
g
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
 
D
s
a
A
p
p
r
o
a
c
h
e
s
P
a
n
e
l
(
{
 
s
l
u
g
 
}
:
 
D
s
a
A
p
p
r
o
a
c
h
e
s
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


 
 
c
o
n
s
t
 
[
e
x
p
a
n
d
e
d
,
 
s
e
t
E
x
p
a
n
d
e
d
]
 
=
 
u
s
e
S
t
a
t
e
<
n
u
m
b
e
r
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
a
p
p
r
o
a
c
h
e
s
 
=
 
[
]
 
}
 
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
 
q
u
e
r
y
K
e
y
s
.
d
s
a
.
a
p
p
r
o
a
c
h
e
s
(
s
l
u
g
)
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
<
D
s
a
A
p
p
r
o
a
c
h
E
n
t
r
y
[
]
>
(
`
/
d
s
a
/
p
r
o
b
l
e
m
s
/
$
{
s
l
u
g
}
/
a
p
p
r
o
a
c
h
e
s
`
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
 
2
4
 
*
 
6
0
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
}
)
;




 
 
i
f
 
(
a
p
p
r
o
a
c
h
e
s
.
l
e
n
g
t
h
 
=
=
=
 
0
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
1
.
5
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
<
C
o
d
e
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
w
-
3
 
h
-
3
 
t
e
x
t
-
v
i
o
l
e
t
-
5
0
0
"
 
/
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


 
 
 
 
 
 
 
 
 
 
{
a
p
p
r
o
a
c
h
e
s
.
l
e
n
g
t
h
}
 
{
a
p
p
r
o
a
c
h
e
s
.
l
e
n
g
t
h
 
=
=
=
 
1
 
?
 
"
a
p
p
r
o
a
c
h
"
 
:
 
"
a
p
p
r
o
a
c
h
e
s
"
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
 
d
i
v
i
d
e
-
y
 
d
i
v
i
d
e
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
 
d
a
r
k
:
d
i
v
i
d
e
-
w
h
i
t
e
/
5
 
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


 
 
 
 
 
 
 
 
{
a
p
p
r
o
a
c
h
e
s
.
m
a
p
(
(
a
p
p
r
o
a
c
h
,
 
i
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
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
E
x
p
a
n
d
e
d
(
e
x
p
a
n
d
e
d
 
=
=
=
 
i
 
?
 
n
u
l
l
 
:
 
i
)
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
w
-
f
u
l
l
 
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
b
e
t
w
e
e
n
 
g
a
p
-
3
 
p
x
-
4
 
p
y
-
3
 
t
e
x
t
-
l
e
f
t
 
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
5
0
 
d
a
r
k
:
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
8
0
0
/
4
0
 
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
-
c
o
l
o
r
s
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
i
n
l
i
n
e
-
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
 
m
i
n
-
w
-
0
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
 
t
e
x
t
-
v
i
o
l
e
t
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
v
i
o
l
e
t
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
S
t
r
i
n
g
(
i
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
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
r
u
n
c
a
t
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
p
p
r
o
a
c
h
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
m
l
-
2
 
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
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
p
p
r
o
a
c
h
.
c
o
m
p
l
e
x
i
t
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
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
D
o
w
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
{
`
w
-
3
.
5
 
h
-
3
.
5
 
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
 
s
h
r
i
n
k
-
0
 
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
-
t
r
a
n
s
f
o
r
m
 
d
u
r
a
t
i
o
n
-
2
0
0
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
p
a
n
d
e
d
 
=
=
=
 
i
 
?
 
"
r
o
t
a
t
e
-
1
8
0
"
 
:
 
"
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
x
p
a
n
d
e
d
 
=
=
=
 
i
 
&
&
 
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
 
h
e
i
g
h
t
:
 
0
,
 
o
p
a
c
i
t
y
:
 
0
 
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
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
,
 
o
p
a
c
i
t
y
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
h
e
i
g
h
t
:
 
0
,
 
o
p
a
c
i
t
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
2
 
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
4
 
p
b
-
4
 
p
l
-
1
1
 
t
e
x
t
-
s
m
 
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
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
p
p
r
o
a
c
h
.
c
o
n
t
e
n
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


