
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
g
r
e
s
s
B
a
r
P
r
o
p
s
 
{


 
 
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
;


 
 
m
a
x
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
?
:
 
s
t
r
i
n
g
;


 
 
a
n
i
m
a
t
e
d
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


 
 
h
e
i
g
h
t
?
:
 
"
t
h
i
n
"
 
|
 
"
n
o
r
m
a
l
"
;


 
 
a
c
t
i
v
e
C
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
r
o
g
r
e
s
s
B
a
r
(
{


 
 
v
a
l
u
e
,


 
 
m
a
x
,


 
 
l
a
b
e
l
,


 
 
a
n
i
m
a
t
e
d
 
=
 
t
r
u
e
,


 
 
h
e
i
g
h
t
 
=
 
"
n
o
r
m
a
l
"
,


 
 
a
c
t
i
v
e
C
o
l
o
r
 
=
 
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
"
,


}
:
 
P
r
o
g
r
e
s
s
B
a
r
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
 
p
c
t
 
=
 
m
a
x
 
>
 
0
 
?
 
M
a
t
h
.
r
o
u
n
d
(
(
v
a
l
u
e
 
/
 
m
a
x
)
 
*
 
1
0
0
)
 
:
 
0
;


 
 
c
o
n
s
t
 
t
r
a
c
k
H
e
i
g
h
t
 
=
 
h
e
i
g
h
t
 
=
=
=
 
"
t
h
i
n
"
 
?
 
"
h
-
0
.
5
"
 
:
 
"
h
-
1
"
;




 
 
i
f
 
(
h
e
i
g
h
t
 
=
=
=
 
"
t
h
i
n
"
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
{
`
w
-
f
u
l
l
 
$
{
t
r
a
c
k
H
e
i
g
h
t
}
 
b
g
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
g
-
w
h
i
t
e
/
1
0
 
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
`
}
>


 
 
 
 
 
 
 
 
{
a
n
i
m
a
t
e
d
 
?
 
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
 
w
i
d
t
h
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
 
w
i
d
t
h
:
 
`
$
{
p
c
t
}
%
`
 
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
6
,
 
d
e
l
a
y
:
 
0
.
1
5
 
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
{
`
h
-
f
u
l
l
 
$
{
a
c
t
i
v
e
C
o
l
o
r
}
`
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
 
:
 
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
{
`
h
-
f
u
l
l
 
$
{
a
c
t
i
v
e
C
o
l
o
r
}
`
}
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
`
$
{
p
c
t
}
%
`
 
}
}
 
/
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
;


 
 
}




 
 
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
p
x
-
5
 
p
y
-
4
 
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
4
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
{
l
a
b
e
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
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
s
p
a
n
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
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
x
s
 
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
s
t
o
n
e
-
5
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
 
m
l
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
{
v
a
l
u
e
}
 
/
 
{
m
a
x
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
{
`
w
-
f
u
l
l
 
$
{
t
r
a
c
k
H
e
i
g
h
t
}
 
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
 
r
o
u
n
d
e
d
-
s
m
`
}
>


 
 
 
 
 
 
 
 
{
a
n
i
m
a
t
e
d
 
?
 
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
 
w
i
d
t
h
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
 
w
i
d
t
h
:
 
`
$
{
p
c
t
}
%
`
 
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
7
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
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
{
`
h
-
f
u
l
l
 
$
{
a
c
t
i
v
e
C
o
l
o
r
}
`
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
 
:
 
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
{
`
h
-
f
u
l
l
 
$
{
a
c
t
i
v
e
C
o
l
o
r
}
`
}
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
`
$
{
p
c
t
}
%
`
 
}
}
 
/
>


 
 
 
 
 
 
 
 
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




